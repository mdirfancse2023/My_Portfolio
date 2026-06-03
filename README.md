# My Portfolio

React + Vite portfolio app with Supabase Edge Functions (contact + chatbot).

## What is kept in this repo

- `src/` - portfolio frontend source
- `public/` - static assets served by Vite/Caddy
- `supabase/functions/` - chatbot and contact form Edge Functions
- `.github/workflows/deploy.yml` - Azure CI/CD pipeline
- `deploy/azure/` - production container files for Azure Container Apps
- `.azure/README.md` - live Azure resource notes

## Local development

```sh
npm install
cp .env.example .env
# Fill .env values
npm run dev
```

## Chatbot (OpenRouter) setup

The chatbot backend runs in `supabase/functions/chat/index.ts` and now uses OpenRouter.

Set these Supabase Edge Function secrets:

- `OPENROUTER_API_KEY` (required)
- `OPENROUTER_MODEL` (optional, default: `google/gemini-2.5-flash`)
- `APP_ORIGIN` (optional, your frontend URL)
- `APP_TITLE` (optional, your site name)

Example:

```sh
supabase secrets set OPENROUTER_API_KEY=your_key_here
supabase secrets set OPENROUTER_MODEL=google/gemini-2.5-flash
supabase secrets set APP_ORIGIN=https://your-domain.com
supabase secrets set APP_TITLE="Md Irfan | Software Developer"
supabase functions deploy chat
```

## Contact form integration setup

The contact form calls Supabase Edge Function `send-contact-email`, which sends mail via Resend.

Set this required secret:

- `RESEND_API_KEY`

Then deploy the function:

```sh
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase functions deploy send-contact-email
```

If you keep `from: "Portfolio Contact <onboarding@resend.dev>"`, delivery works for testing but can have stricter limits. For production reliability, verify your own domain in Resend and use that sender address.

## Docker build

```sh
docker build -f deploy/azure/Dockerfile -t your-dockerhub-username/myportfolio:latest .
docker run -p 8080:80 your-dockerhub-username/myportfolio:latest
```

## Azure CI/CD

This repo deploys to Azure Container Apps through `.github/workflows/deploy.yml`.

Required GitHub repository secrets:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

On pull requests to `main`, GitHub Actions installs dependencies, runs tests, and builds the app.

On pushes to `main`, it also:

1. Logs in to Azure using OIDC.
2. Builds and pushes the Docker image to Azure Container Registry.
3. Updates the `myportfolio` Azure Container App.
4. Verifies the deployed app endpoint.
