# Hook Studio

A web tool for generating attention-grabbing hooks for social media content.

- **Manual mode** — pick a hook type, fill in the blanks, copy the result. Fully client-side.
- **Automatic mode** (beta) — describe your video and let an LLM generate hooks for you.

## Deploying on Cloudflare Pages

1. In the Cloudflare dashboard, create a new Pages project connected to this GitHub repo.
2. Build settings: no build command, output directory `/` (this is a static site — Cloudflare will pick up the `functions/` folder automatically for automatic mode's backend).
3. Deploy.

## Enabling automatic mode

Automatic mode calls an LLM through [OpenRouter](https://openrouter.ai). Without an API key set, it will show a "not configured yet" message but the rest of the site works fine.

To enable it:

1. Create a free OpenRouter account and generate an API key at [openrouter.ai/keys](https://openrouter.ai/keys) (no credit card required for free-tier models).
2. In your Cloudflare Pages project settings, add an environment variable:
   - `OPENROUTER_API_KEY` — your key, set as a **secret**.
3. Optional: set `OPENROUTER_MODEL` to a specific model id if you'd rather not use the default. It defaults to `openrouter/free`, which automatically routes to whatever free model OpenRouter currently offers — free models rotate over time, so this avoids the app breaking when one gets discontinued.
4. Redeploy for the environment variable to take effect.

## Legal pages

`privacy.html`, `terms.html`, `cookies.html`, and `refund.html` are general-purpose, plain-language templates (operator: AlphaHylian, contact: ayandabose2021@gmail.com, governing law: Estonia/GDPR baseline) — **not a substitute for legal advice**. Review them yourself, especially:

- The Refund Policy if/when you launch a specific paid plan (it currently covers both subscriptions and one-time credits generically since pricing isn't decided yet).
- Any of the pages if you register a business entity, target a different country, or start collecting more data than automatic mode currently sends (video concept, goal, platform, hook count — nothing else, no accounts, no analytics, no cookies).
