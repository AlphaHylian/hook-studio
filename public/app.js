const HOOK_TYPES = {
  curiosity_gap: {
    label: "Curiosity Gap",
    bestFor: "Best for teasing something the audience doesn't know yet. Works well for education and how-to content.",
    template: "Everyone is {{thing}}, but nobody talks about it.",
    blanks: [
      { key: "thing", label: "The unknown effective thing", placeholder: "using this one hidden feature to save hours of work" },
    ],
  },
  contrarian: {
    label: "Contrarian",
    bestFor: "Best for challenging common advice. Works well for opinion content, since disagreement grabs attention fast.",
    template: "Stop {{popular_belief}}. It's actually {{something_bad}}.",
    blanks: [
      { key: "popular_belief", label: "Popular belief or advice", placeholder: "waking up at 5:00 AM" },
      { key: "something_bad", label: "Why it's actually bad", placeholder: "ruining your focus" },
    ],
  },
  listicle: {
    label: "Listicle",
    bestFor: "Best for numbered tips or mistakes. Works well for educational, easy-to-scan content.",
    template: "{{number}} {{variable}} that will {{promise}}",
    blanks: [
      { key: "number", label: "Number", placeholder: "3" },
      { key: "variable", label: "Variable (habits, mistakes, tips...)", placeholder: "simple habits" },
      { key: "promise", label: "Promise", placeholder: "fix your sleep schedule this week" },
    ],
  },
  story: {
    label: "Story",
    bestFor: "Best for opening with a personal experience. Works well for building relatability and emotional connection.",
    template: "{{temporal_adverb}}, I {{failure}}. Here is the mistake that changed everything.",
    blanks: [
      { key: "temporal_adverb", label: "Temporal adverb", placeholder: "Last year" },
      { key: "failure", label: "Failure", placeholder: "completely failed my biggest exam" },
    ],
  },
  shock_stat: {
    label: "Shock Stat",
    bestFor: "Best for leading with a striking number. Works well for grabbing attention fast with data.",
    template: "{{percentage}} of people {{bad_thing}}. Here is how to not be one of them.",
    blanks: [
      { key: "percentage", label: "Percentage", placeholder: "85%" },
      { key: "bad_thing", label: "Bad thing", placeholder: "hate their jobs" },
    ],
  },
  how_to: {
    label: "How-To",
    bestFor: "Best for promising a clear outcome. Works well for tutorials and educational content.",
    template: "How to {{hard_action}} in {{timeframe}} without {{limitation}}.",
    blanks: [
      { key: "hard_action", label: "Hard action", placeholder: "build a website" },
      { key: "timeframe", label: "Timeframe", placeholder: "10 minutes" },
      { key: "limitation", label: "Limitation", placeholder: "knowing how to code" },
    ],
  },
  trend_fomo: {
    label: "Trend / FOMO",
    bestFor: "Best for tapping into what's happening right now. Works well for trend-driven content.",
    template: "This {{thing}} is {{what_it_does}}. {{threat}}",
    blanks: [
      { key: "thing", label: "The thing", placeholder: "new AI tool" },
      { key: "what_it_does", label: "What the thing does", placeholder: "changing the job market overnight" },
      { key: "threat", label: "Threat for not using/doing it", placeholder: "Don't get left behind." },
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

function renderBlanksForType(typeKey) {
  const type = HOOK_TYPES[typeKey];
  hookTypeBestFor.textContent = type.bestFor;
  blanksContainer.innerHTML = "";

  type.blanks.forEach((blank) => {
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
  const type = HOOK_TYPES[hookTypeSelect.value];
  let result = type.template;

  const inputs = blanksContainer.querySelectorAll("input[data-blank-key]");
  inputs.forEach((input) => {
    const value = input.value.trim() || `[${input.placeholder || input.dataset.blankKey}]`;
    result = result.replaceAll(`{{${input.dataset.blankKey}}}`, value);
  });

  manualPreview.textContent = result;
}

hookTypeSelect.addEventListener("change", () => renderBlanksForType(hookTypeSelect.value));
renderBlanksForType(hookTypeSelect.value);

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
