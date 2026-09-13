# Hook Studio

A web tool for generating attention-grabbing hooks for social media content.

- **Manual mode** — pick a hook type, fill in the blanks, copy the result. Fully client-side.
- **Automatic mode** (beta) — describe your video and let an LLM generate hooks for you.

## Project layout

- `public/` — the static site (HTML/CSS/JS). Served directly at the edge for any request that matches a file in here.
- `src/worker.js` — the Worker script. Handles `POST /api/generate-hooks`; everything else falls through to the static assets in `public/`.
- `wrangler.jsonc` — Workers config: points `main` at the worker script and `assets.directory` at `public/`, with `run_worker_first` set for `/api/*` so those requests always reach the Worker instead of being treated as a (missing) static file.

## Deploying on Cloudflare Workers

**Option A — CLI (from your machine, needs Node 22+):**

```bash
npx wrangler deploy
```

Run once, logged into your Cloudflare account (`npx wrangler login` first if needed). Re-run after any change, or set up **Workers Builds** in the Cloudflare dashboard to auto-deploy on every push to this repo instead.

**Option B — Dashboard git integration ("Workers Builds"):** in the Cloudflare dashboard, create a new Worker, connect it to this GitHub repo, and point the build at the repo root — it reads `wrangler.jsonc` automatically.

## Enabling automatic mode

Automatic mode calls an LLM through [OpenRouter](https://openrouter.ai). Without an API key set, it will show a "not configured yet" message but the rest of the site works fine.

To enable it:

1. Create a free OpenRouter account and generate an API key at [openrouter.ai/keys](https://openrouter.ai/keys) (no credit card required for free-tier models).
2. Set it as a secret on the Worker:
   ```bash
   npx wrangler secret put OPENROUTER_API_KEY
   ```
   (or add it under the Worker's **Settings → Variables and Secrets** in the dashboard, as a secret, not a plain text variable).
3. Optional: set `OPENROUTER_MODEL` (as a regular variable, in `wrangler.jsonc`'s `vars` or the dashboard) to a specific model id if you'd rather not use the default. It defaults to `openrouter/free`, which automatically routes to whatever free model OpenRouter currently offers — free models rotate over time, so this avoids the app breaking when one gets discontinued.
4. Redeploy for the secret to take effect if you set it before the first deploy.

## Local development

`npx wrangler dev` (needs Node 22+) runs the full thing locally, Worker included, at `http://localhost:8787`. Use a local `.dev.vars` file (never committed) with `OPENROUTER_API_KEY=...` to test automatic mode locally.

## Legal pages

`privacy.html`, `terms.html`, `cookies.html`, and `refund.html` are general-purpose, plain-language templates (operator: AlphaHylian, contact: ayandabose2021@gmail.com, governing law: Estonia/GDPR baseline) — **not a substitute for legal advice**. Review them yourself, especially:

- The Refund Policy if/when you launch a specific paid plan (it currently covers both subscriptions and one-time credits generically since pricing isn't decided yet).
- Any of the pages if you register a business entity, target a different country, or start collecting more data than automatic mode currently sends (video concept, goal, platform, hook count — nothing else, no accounts, no analytics, no cookies).
