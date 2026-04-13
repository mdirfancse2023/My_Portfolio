# My Portfolio

React + Vite portfolio app with Supabase Edge Functions (contact + chatbot).

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
docker build -t your-dockerhub-username/myportfolio:latest .
docker run -p 8080:80 your-dockerhub-username/myportfolio:latest
```

## Render deployment

This app is a Vite frontend, so Render can host it as a Static Site. The repo now includes [`render.yaml`](./render.yaml) with:

- `npm ci && npm run build`
- publish directory `dist`
- SPA rewrite from `/*` to `/index.html`

### Required Render environment variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

### Deploy steps

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Render, select `New` -> `Blueprint`.
3. Connect the repo and let Render read `render.yaml`.
4. Add the two `VITE_...` environment variables above when prompted.
5. Deploy.

If you create the Static Site manually instead of using the Blueprint, use:

- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`
- Rewrite Rule: `/*` -> `/index.html`

### After the first Render deploy

The chatbot edge function sends your frontend URL to OpenRouter using the `APP_ORIGIN` secret. After Render gives you a URL such as `https://your-site.onrender.com`, update the secret and redeploy the chat function:

```sh
supabase secrets set APP_ORIGIN=https://your-site.onrender.com
supabase functions deploy chat
```

If you later add a custom domain in Render, update `APP_ORIGIN` again to that final HTTPS URL.

## Legacy GKE + GitHub Actions deployment

This repo includes:

- `Dockerfile` for production build
- `k8s/deployment.yaml`
- `k8s/service.yaml`
- `.github/workflows/deploy-gke.yml`

### Required GitHub repository secrets

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`
- `GKE_PROJECT`
- `GKE_CLUSTER`
- `GKE_REGION`
- `GCP_WIF_PROVIDER` (Workload Identity Provider resource name)
- `GCP_SA_EMAIL` (Service account email used by GitHub Actions)

### How it deploys

1. Build and push Docker image to Docker Hub
2. Authenticate with GCP
3. Pull GKE credentials
4. Apply Kubernetes manifests and rollout deployment

On each push to `main`, GitHub Actions deploys the latest version automatically.
