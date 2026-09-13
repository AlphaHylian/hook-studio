const HOOK_TYPES = {
  curiosity_gap: {
    label: "Curiosity Gap",
    bestFor: "Best for teasing something the audience doesn't know yet. Works well for education and how-to content.",
    templates: [
      {
        template: "Everyone is {{thing}}, but nobody talks about it.",
        blanks: [{ key: "thing", label: "The unknown effective thing", placeholder: "using this one hidden feature to save hours of work" }],
      },
      {
        template: "Nobody tells you that {{secret}}.",
        blanks: [{ key: "secret", label: "The secret", placeholder: "most job interviews are decided in the first two minutes" }],
      },
      {
        template: "There's a reason {{outcome}}, and it's not what you think.",
        blanks: [{ key: "outcome", label: "The outcome", placeholder: "some people get promoted way faster than everyone else" }],
      },
      {
        template: "I found out {{surprising_thing}}, and it changed how I do everything.",
        blanks: [{ key: "surprising_thing", label: "The surprising thing", placeholder: "most of my time was going to one pointless task" }],
      },
    ],
  },
  contrarian: {
    label: "Contrarian",
    bestFor: "Best for challenging common advice. Works well for opinion content, since disagreement grabs attention fast.",
    templates: [
      {
        template: "Stop {{popular_belief}}. It's actually {{something_bad}}.",
        blanks: [
          { key: "popular_belief", label: "Popular belief or advice", placeholder: "waking up at 5:00 AM" },
          { key: "something_bad", label: "Why it's actually bad", placeholder: "ruining your focus" },
        ],
      },
      {
        template: "{{popular_belief}} is bad advice. Here's why.",
        blanks: [{ key: "popular_belief", label: "Popular belief or advice", placeholder: "Always agree to work overtime" }],
      },
      {
        template: "Everyone says to {{popular_belief}}. I think that's wrong, and here's what I do instead.",
        blanks: [{ key: "popular_belief", label: "Popular belief or advice", placeholder: "follow your passion" }],
      },
      {
        template: "{{popular_belief}} sounds right, but it's actually {{something_bad}}.",
        blanks: [
          { key: "popular_belief", label: "Popular belief or advice", placeholder: "multitasking makes you more productive" },
          { key: "something_bad", label: "Why it's actually bad", placeholder: "cutting your output in half" },
        ],
      },
    ],
  },
  listicle: {
    label: "Listicle",
    bestFor: "Best for numbered tips or mistakes. Works well for educational, easy-to-scan content.",
    templates: [
      {
        template: "{{number}} {{variable}} that will {{promise}}",
        blanks: [
          { key: "number", label: "Number", placeholder: "3" },
          { key: "variable", label: "Variable (habits, mistakes, tips...)", placeholder: "simple habits" },
          { key: "promise", label: "Promise", placeholder: "fix your sleep schedule this week" },
        ],
      },
      {
        template: "{{number}} things I wish I knew before {{situation}}.",
        blanks: [
          { key: "number", label: "Number", placeholder: "5" },
          { key: "situation", label: "Situation", placeholder: "starting my own business" },
        ],
      },
      {
        template: "{{number}} {{variable}} nobody tells you about {{topic}}.",
        blanks: [
          { key: "number", label: "Number", placeholder: "4" },
          { key: "variable", label: "Variable (things, rules, mistakes...)", placeholder: "things" },
          { key: "topic", label: "Topic", placeholder: "renting your first apartment" },
        ],
      },
      {
        template: "{{number}} {{variable}} that actually work for {{promise}}.",
        blanks: [
          { key: "number", label: "Number", placeholder: "3" },
          { key: "variable", label: "Variable (tricks, methods, apps...)", placeholder: "tricks" },
          { key: "promise", label: "Promise", placeholder: "saving money without feeling it" },
        ],
      },
    ],
  },
  story: {
    label: "Story",
    bestFor: "Best for opening with a personal experience. Works well for building relatability and emotional connection.",
    templates: [
      {
        template: "{{temporal_adverb}}, I {{failure}}. Here is the mistake that changed everything.",
        blanks: [
          { key: "temporal_adverb", label: "Temporal adverb", placeholder: "Last year" },
          { key: "failure", label: "Failure", placeholder: "completely failed my biggest exam" },
        ],
      },
      {
        template: "I used to {{old_behavior}}. Then {{turning_point}} happened.",
        blanks: [
          { key: "old_behavior", label: "Old behavior", placeholder: "avoid cooking at all costs" },
          { key: "turning_point", label: "Turning point", placeholder: "I couldn't afford takeout anymore" },
        ],
      },
      {
        template: "{{temporal_adverb}}, something happened that made me rethink {{topic}} completely.",
        blanks: [
          { key: "temporal_adverb", label: "Temporal adverb", placeholder: "A few months ago" },
          { key: "topic", label: "Topic", placeholder: "how I spend my mornings" },
        ],
      },
      {
        template: "This is the story of how {{event}} taught me {{lesson}}.",
        blanks: [
          { key: "event", label: "Event", placeholder: "getting laid off" },
          { key: "lesson", label: "Lesson", placeholder: "how to actually save money" },
        ],
      },
    ],
  },
  shock_stat: {
    label: "Shock Stat",
    bestFor: "Best for leading with a striking number. Works well for grabbing attention fast with data.",
    templates: [
      {
        template: "{{percentage}} of people {{bad_thing}}. Here is how to not be one of them.",
        blanks: [
          { key: "percentage", label: "Percentage", placeholder: "85%" },
          { key: "bad_thing", label: "Bad thing", placeholder: "hate their jobs" },
        ],
      },
      {
        template: "Only {{percentage}} of people actually {{good_thing}}.",
        blanks: [
          { key: "percentage", label: "Percentage", placeholder: "12%" },
          { key: "good_thing", label: "Good thing", placeholder: "stick to their New Year's goals" },
        ],
      },
      {
        template: "{{number}} out of {{total}} people get {{topic}} wrong.",
        blanks: [
          { key: "number", label: "Number", placeholder: "7" },
          { key: "total", label: "Out of", placeholder: "10" },
          { key: "topic", label: "Topic", placeholder: "their resume" },
        ],
      },
      {
        template: "{{percentage}} of {{group}} struggle with {{problem}}, and most don't know why.",
        blanks: [
          { key: "percentage", label: "Percentage", placeholder: "60%" },
          { key: "group", label: "Group", placeholder: "new managers" },
          { key: "problem", label: "Problem", placeholder: "giving feedback" },
        ],
      },
    ],
  },
  how_to: {
    label: "How-To",
    bestFor: "Best for promising a clear outcome. Works well for tutorials and educational content.",
    templates: [
      {
        template: "How to {{hard_action}} in {{timeframe}} without {{limitation}}.",
        blanks: [
          { key: "hard_action", label: "Hard action", placeholder: "build a website" },
          { key: "timeframe", label: "Timeframe", placeholder: "10 minutes" },
          { key: "limitation", label: "Limitation", placeholder: "knowing how to code" },
        ],
      },
      {
        template: "The fastest way to {{hard_action}}, even if {{limitation}}.",
        blanks: [
          { key: "hard_action", label: "Hard action", placeholder: "learn a language" },
          { key: "limitation", label: "Limitation", placeholder: "you have zero free time" },
        ],
      },
      {
        template: "How to {{hard_action}} without {{limitation}}.",
        blanks: [
          { key: "hard_action", label: "Hard action", placeholder: "grow your savings" },
          { key: "limitation", label: "Limitation", placeholder: "cutting out everything you enjoy" },
        ],
      },
      {
        template: "I {{hard_action}} in just {{timeframe}}, and here's exactly how.",
        blanks: [
          { key: "hard_action", label: "Hard action", placeholder: "packed for a two-week trip" },
          { key: "timeframe", label: "Timeframe", placeholder: "one carry-on" },
        ],
      },
    ],
  },
  trend_fomo: {
    label: "Trend / FOMO",
    bestFor: "Best for tapping into what's happening right now. Works well for trend-driven content.",
    templates: [
      {
        template: "This {{thing}} is {{what_it_does}}. {{threat}}",
        blanks: [
          { key: "thing", label: "The thing", placeholder: "new AI tool" },
          { key: "what_it_does", label: "What the thing does", placeholder: "changing the job market overnight" },
          { key: "threat", label: "Threat for not using/doing it", placeholder: "Don't get left behind." },
        ],
      },
      {
        template: "Everyone is switching to {{thing}} right now, and here's why.",
        blanks: [{ key: "thing", label: "The thing", placeholder: "this new budgeting app" }],
      },
      {
        template: "{{thing}} is blowing up right now. {{threat}}",
        blanks: [
          { key: "thing", label: "The thing", placeholder: "this workout method" },
          { key: "threat", label: "Threat for not using/doing it", placeholder: "Here's what you're missing." },
        ],
      },
      {
        template: "If you're not using {{thing}} yet, {{threat}}",
        blanks: [
          { key: "thing", label: "The thing", placeholder: "this scheduling trick" },
          { key: "threat", label: "Threat for not using/doing it", placeholder: "you're making things harder than they need to be." },
        ],
      },
    ],
  },
  question: {
    label: "Question",
    bestFor: "Best for opening with something the viewer is already asking themselves. Works well across almost any goal.",
    templates: [
      {
        template: "Have you ever wondered {{question}}?",
        blanks: [{ key: "question", label: "The question", placeholder: "why some people always seem to have free time" }],
      },
      {
        template: "What if {{scenario}}?",
        blanks: [{ key: "scenario", label: "The scenario", placeholder: "you never had to meal plan again" }],
      },
      {
        template: "Why does {{thing}} always {{outcome}}?",
        blanks: [
          { key: "thing", label: "The thing", placeholder: "laundry" },
          { key: "outcome", label: "Outcome", placeholder: "pile up right when you're busiest" },
        ],
      },
      {
        template: "Ever notice how {{observation}}?",
        blanks: [{ key: "observation", label: "The observation", placeholder: "the busiest people somehow reply to emails the fastest" }],
      },
    ],
  },
  callout: {
    label: "Callout",
    bestFor: "Best for speaking directly to a specific kind of viewer, so they know right away this is for them.",
    templates: [
      {
        template: "If you're {{identity}}, this is for you.",
        blanks: [{ key: "identity", label: "Identity", placeholder: "a new manager" }],
      },
      {
        template: "This is for every {{identity}} who {{struggle}}.",
        blanks: [
          { key: "identity", label: "Identity", placeholder: "freelancer" },
          { key: "struggle", label: "Struggle", placeholder: "dreads writing invoices" },
        ],
      },
      {
        template: "If you {{situation}}, keep watching.",
        blanks: [{ key: "situation", label: "Situation", placeholder: "have ever frozen up in a job interview" }],
      },
      {
        template: "Not everyone will need this, but if you {{situation}}, you will.",
        blanks: [{ key: "situation", label: "Situation", placeholder: "are moving out for the first time" }],
      },
    ],
  },
  warning: {
    label: "Warning",
    bestFor: "Best for flagging a mistake or risk the viewer doesn't realize they're taking.",
    templates: [
      {
        template: "If you're {{bad_habit}}, stop right now.",
        blanks: [{ key: "bad_habit", label: "Bad habit", placeholder: "charging your phone next to your bed" }],
      },
      {
        template: "Nobody warns you about {{risk}}.",
        blanks: [{ key: "risk", label: "Risk", placeholder: "how fast credit card interest adds up" }],
      },
      {
        template: "This is your sign to stop {{bad_habit}}.",
        blanks: [{ key: "bad_habit", label: "Bad habit", placeholder: "checking your phone first thing in the morning" }],
      },
      {
        template: "{{bad_habit}} is quietly ruining {{thing_affected}}.",
        blanks: [
          { key: "bad_habit", label: "Bad habit", placeholder: "skipping breakfast" },
          { key: "thing_affected", label: "What it's affecting", placeholder: "your focus by 2pm" },
        ],
      },
    ],
  },
  transformation: {
    label: "Transformation",
    bestFor: "Best for showing a clear before-and-after. Works well for storytelling and inspiration.",
    templates: [
      {
        template: "I went from {{before_state}} to {{after_state}} in {{timeframe}}.",
        blanks: [
          { key: "before_state", label: "Before", placeholder: "living paycheck to paycheck" },
          { key: "after_state", label: "After", placeholder: "having three months of savings" },
          { key: "timeframe", label: "Timeframe", placeholder: "a year" },
        ],
      },
      {
        template: "{{timeframe}} ago I was {{before_state}}. Now I {{after_state}}.",
        blanks: [
          { key: "timeframe", label: "Timeframe", placeholder: "Six months" },
          { key: "before_state", label: "Before", placeholder: "too anxious to cook for guests" },
          { key: "after_state", label: "After", placeholder: "host dinner parties every month" },
        ],
      },
      {
        template: "Everything changed the day I went from {{before_state}} to {{after_state}}.",
        blanks: [
          { key: "before_state", label: "Before", placeholder: "dreading Mondays" },
          { key: "after_state", label: "After", placeholder: "actually looking forward to work" },
        ],
      },
      {
        template: "I didn't believe {{promise}} was possible until I did it myself.",
        blanks: [{ key: "promise", label: "Promise", placeholder: "paying off my car a year early" }],
      },
    ],
  },
  myth_bust: {
    label: "Myth-Bust",
    bestFor: "Best for correcting a widely believed misconception. Works well for education and opinion content.",
    templates: [
      {
        template: "{{myth}} is a myth. Here's what's actually true.",
        blanks: [{ key: "myth", label: "The myth", placeholder: "eating at night makes you gain weight" }],
      },
      {
        template: "You've been told {{myth}}. That's not quite right.",
        blanks: [{ key: "myth", label: "The myth", placeholder: "you need eight hours of sleep to function" }],
      },
      {
        template: "{{myth}} isn't true, and believing it is costing you {{cost}}.",
        blanks: [
          { key: "myth", label: "The myth", placeholder: "more expensive always means better quality" },
          { key: "cost", label: "The cost", placeholder: "hundreds of dollars a year" },
        ],
      },
      {
        template: "Everyone believes {{myth}}. The truth is different.",
        blanks: [{ key: "myth", label: "The myth", placeholder: "you have to wake up early to be productive" }],
      },
    ],
  },
};

// ---- Mode toggle ----
const tabManual = document.getElementById("tab-manual");
const tabAutomatic = document.getElementById("tab-automatic");
const panelManual = document.getElementById("panel-manual");
const panelAutomatic = document.getElementById("panel-automatic");

function setMode(mode) {
  const isManual = mode === "manual";
  tabManual.classList.toggle("active", isManual);
  tabAutomatic.classList.toggle("active", !isManual);
  tabManual.setAttribute("aria-selected", String(isManual));
  tabAutomatic.setAttribute("aria-selected", String(!isManual));
  tabManual.tabIndex = isManual ? 0 : -1;
  tabAutomatic.tabIndex = isManual ? -1 : 0;
  panelManual.classList.toggle("hidden", !isManual);
  panelAutomatic.classList.toggle("hidden", isManual);
}

tabManual.addEventListener("click", () => setMode("manual"));
tabAutomatic.addEventListener("click", () => setMode("automatic"));

[tabManual, tabAutomatic].forEach((tab) => {
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const other = tab === tabManual ? tabAutomatic : tabManual;
    other.focus();
    other.click();
  });
});

setMode("manual");

// ---- Manual mode ----
const hookTypeSelect = document.getElementById("hook-type");
const hookTypeBestFor = document.getElementById("hook-type-bestfor");
const templateSelect = document.getElementById("hook-template");
const blanksContainer = document.getElementById("blanks-container");
const manualPreview = document.getElementById("manual-preview");
const copyManualBtn = document.getElementById("copy-manual");
const copiedManualMsg = document.getElementById("copied-manual");

for (const [key, type] of Object.entries(HOOK_TYPES)) {
  const opt = document.createElement("option");
  opt.value = key;
  opt.textContent = type.label;
  hookTypeSelect.appendChild(opt);
}

function previewWithPlaceholders(variant) {
  let result = variant.template;
  variant.blanks.forEach((blank) => {
    result = result.replaceAll(`{{${blank.key}}}`, `[${blank.placeholder || blank.key}]`);
  });
  return result;
}

function renderTemplatesForType(typeKey) {
  const type = HOOK_TYPES[typeKey];
  hookTypeBestFor.textContent = type.bestFor;

  templateSelect.innerHTML = "";
  type.templates.forEach((variant, index) => {
    const opt = document.createElement("option");
    opt.value = String(index);
    opt.textContent = previewWithPlaceholders(variant);
    templateSelect.appendChild(opt);
  });

  renderBlanksForVariant(typeKey, 0);
}

function renderBlanksForVariant(typeKey, variantIndex) {
  const variant = HOOK_TYPES[typeKey].templates[variantIndex];
  blanksContainer.innerHTML = "";

  variant.blanks.forEach((blank) => {
    const field = document.createElement("div");
    field.className = "field";

    const label = document.createElement("label");
    label.setAttribute("for", `blank-${blank.key}`);
    label.textContent = blank.label;

    const input = document.createElement("input");
    input.type = "text";
    input.id = `blank-${blank.key}`;
    input.dataset.blankKey = blank.key;
    input.placeholder = blank.placeholder || "";
    input.addEventListener("input", updateManualPreview);

    field.appendChild(label);
    field.appendChild(input);
    blanksContainer.appendChild(field);
  });

  updateManualPreview();
}

function updateManualPreview() {
  const variant = HOOK_TYPES[hookTypeSelect.value].templates[Number(templateSelect.value)];
  let result = variant.template;

  const inputs = blanksContainer.querySelectorAll("input[data-blank-key]");
  inputs.forEach((input) => {
    const value = input.value.trim() || `[${input.placeholder || input.dataset.blankKey}]`;
    result = result.replaceAll(`{{${input.dataset.blankKey}}}`, value);
  });

  manualPreview.textContent = result;
}

hookTypeSelect.addEventListener("change", () => renderTemplatesForType(hookTypeSelect.value));
templateSelect.addEventListener("change", () => renderBlanksForVariant(hookTypeSelect.value, Number(templateSelect.value)));
renderTemplatesForType(hookTypeSelect.value);

copyManualBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(manualPreview.textContent);
    copiedManualMsg.classList.add("show");
    setTimeout(() => copiedManualMsg.classList.remove("show"), 1500);
  } catch (err) {
    console.error("Copy failed", err);
  }
});

// ---- Automatic mode ----
const autoConcept = document.getElementById("auto-concept");
const autoGoal = document.getElementById("auto-goal");
const autoPlatform = document.getElementById("auto-platform");
const autoCount = document.getElementById("auto-count");
const autoConsent = document.getElementById("auto-consent");
const autoGenerateBtn = document.getElementById("auto-generate");
const autoStatus = document.getElementById("auto-status");
const autoResults = document.getElementById("auto-results");

autoConsent.addEventListener("change", () => {
  autoGenerateBtn.disabled = !autoConsent.checked;
});

const COPY_ICON_SVG =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';

function renderHookResults(hooks) {
  autoResults.innerHTML = "";
  hooks.forEach((hook) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = hook;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", `Copy hook: ${hook}`);
    btn.innerHTML = COPY_ICON_SVG + '<span class="copy-label">Copy</span>';
    const label = btn.querySelector(".copy-label");
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(hook);
        label.textContent = "Copied!";
        setTimeout(() => (label.textContent = "Copy"), 1500);
      } catch (err) {
        console.error("Copy failed", err);
      }
    });

    li.appendChild(span);
    li.appendChild(btn);
    autoResults.appendChild(li);
  });
}

autoGenerateBtn.addEventListener("click", async () => {
  const concept = autoConcept.value.trim();
  if (!concept) {
    autoStatus.textContent = "Enter a video concept first.";
    autoStatus.classList.add("error-text");
    return;
  }

  if (!autoConsent.checked) {
    autoStatus.textContent = "Please check the consent box above first.";
    autoStatus.classList.add("error-text");
    return;
  }

  autoStatus.classList.remove("error-text");
  autoStatus.textContent = "Generating...";
  autoResults.innerHTML = "";
  autoGenerateBtn.disabled = true;

  try {
    const response = await fetch("/api/generate-hooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        videoConcept: concept,
        goal: autoGoal.value,
        platform: autoPlatform.value,
        hookCount: Number(autoCount.value) || 5,
        consent: autoConsent.checked,
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error("Something went wrong. Try again.");
    }

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    autoStatus.textContent = "";
    renderHookResults(data.hooks);
  } catch (err) {
    autoStatus.textContent = err.message || "Something went wrong.";
    autoStatus.classList.add("error-text");
  } finally {
    autoGenerateBtn.disabled = !autoConsent.checked;
  }
});
