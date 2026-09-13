const PROMPT_TEMPLATE = `Write {{HOOK_COUNT}} hooks for a {{PLATFORM}} video.
Video concept: {{VIDEO_CONCEPT}}
Goal of the video: {{VIDEO_GOAL}}

The hooks should make people want to keep watching. Write them like a real person would
actually speak at the beginning of a video. Keep the language natural, conversational, specific,
and easy to say out loud.

Do not make the hooks sound like advertisements or AI-generated content. Avoid overly
polished wording, unnecessary buzzwords, generic statements, and forced clickbait.

Match the hook to the platform:
- TikTok, Instagram Reels, and YouTube Shorts: 7 to 10 words, suitable for roughly 2 to 4
  seconds of speech
- YouTube Longform: around 20 words, suitable for roughly 8 to 10 seconds of speech

If the platform is not listed above, use a natural length appropriate for that platform and format.

Match the hook to the video's goal. For example:
- Education: create curiosity around a useful insight, mistake, technique, or result
- Storytelling: create intrigue around a situation, experience, conflict, or outcome
- Entertainment: create curiosity, surprise, or anticipation
- Inspiration: create an emotional reason to keep watching
- Promotion: highlight a problem, benefit, or desired outcome without sounding like an
  advertisement
- Opinion: create tension around a strong or unexpected viewpoint

Use a variety of hook approaches. Choose naturally from (they don't all need to be different
categories):
- Curiosity: tease information the viewer wants to discover
- Contrarian: challenge a common belief or piece of advice
- List: introduce a specific number of tips, mistakes, reasons, or examples
- Story: open with a personal or relatable situation
- Question: ask something the target viewer is likely to care about
- Surprising fact: lead with an unexpected fact, number, or observation
- How-to: promise a clear and useful outcome
- Trend/FOMO: make the viewer feel they might be missing something relevant

Do not force every hook into a different category if doing so makes the hooks less natural.
Prioritize strong, human-sounding hooks over rigidly following the categories.

Additional rules:
- Write exactly {{HOOK_COUNT}} hooks
- Make each hook meaningfully different
- Make the hooks specific to the video concept
- Don't make the hooks too specific. Keep them as close to the video concept as possible
- Use simple spoken language
- Avoid generic openings such as "Here are some tips" or "In this video"
- Avoid fake urgency and exaggerated claims
- Do not use em dashes
- Do not use quotation marks
- Do not number the hooks
- Do not explain your choices
- Do not mention the hook types
- Output only the hooks, with one hook per line`;

const KNOWN_GOALS = ["Education", "Storytelling", "Entertainment", "Inspiration", "Promotion", "Opinion"];
const KNOWN_PLATFORMS = ["TikTok", "Instagram Reels", "YouTube Shorts", "YouTube Longform", "Other"];

function buildPrompt({ videoConcept, goal, platform, hookCount }) {
  return PROMPT_TEMPLATE.replaceAll("{{HOOK_COUNT}}", String(hookCount))
    .replaceAll("{{PLATFORM}}", platform)
    .replaceAll("{{VIDEO_CONCEPT}}", videoConcept)
    .replaceAll("{{VIDEO_GOAL}}", goal);
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid request body." }, 400);
  }

  const videoConcept = (payload.videoConcept || "").toString().trim().slice(0, 1000);
  const goal = KNOWN_GOALS.includes(payload.goal) ? payload.goal : "Education";
  const platform = KNOWN_PLATFORMS.includes(payload.platform) ? payload.platform : "Other";
  const hookCount = Math.min(10, Math.max(1, parseInt(payload.hookCount, 10) || 5));

  if (!videoConcept) {
    return jsonResponse({ error: "Video concept is required." }, 400);
  }

  if (payload.consent !== true) {
    return jsonResponse({ error: "Consent is required to generate hooks." }, 400);
  }

  if (!env.OPENROUTER_API_KEY) {
    return jsonResponse({ error: "Automatic mode isn't configured yet." }, 503);
  }

  const model = env.OPENROUTER_MODEL || "openrouter/free";
  const prompt = buildPrompt({ videoConcept, goal, platform, hookCount });

  let upstreamResponse;
  try {
    upstreamResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://hook-studio.pages.dev",
        "X-Title": "Hook Studio",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
      }),
    });
  } catch {
    return jsonResponse({ error: "Couldn't reach the hook generator. Try again." }, 502);
  }

  if (!upstreamResponse.ok) {
    return jsonResponse({ error: "The hook generator is temporarily unavailable. Try again shortly." }, 502);
  }

  const data = await upstreamResponse.json();
  const text = data?.choices?.[0]?.message?.content || "";

  const hooks = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (hooks.length === 0) {
    return jsonResponse({ error: "No hooks were generated. Try again." }, 502);
  }

  return jsonResponse({ hooks });
}
