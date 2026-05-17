# Portfolio Chatbot Setup

This portfolio now supports a safe real chatbot through a server-side `/api/chat` endpoint.

## Recommended deployment

Use Cloudflare Pages or Cloudflare Workers so the Gemini API key stays on the server.

## Local frontend behavior

- If `VITE_CHAT_API_URL` is set, the frontend will call that endpoint.
- If the endpoint is unavailable, the chatbot falls back to the local keyword assistant.

## Required secret

Set this on the server side only:

- `GEMINI_API_KEY`

Optional:

- `GEMINI_MODEL` default: `gemini-1.5-flash`

## Environment file

Copy `.env.example` to `.env` for local development.

## Cloudflare Pages Functions

The serverless endpoint lives in `functions/api/chat.js`.

It accepts JSON:

```json
{ "message": "Tell me about your projects" }
```

and returns:

```json
{ "response": "..." }
```<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/4

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
