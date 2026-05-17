const corsHeaders = (origin) => ({
  'Access-Control-Allow-Origin': origin || '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
});

const buildSystemPrompt = () => `You are Nexus AI, the portfolio assistant for Prabesh Acharya.
Answer only questions about the portfolio owner, his skills, projects, experience, services, and contact details.
Keep replies concise, friendly, and helpful.
If a user asks something unrelated, gently redirect them back to the portfolio.`;

export async function onRequestOptions({ request }) {
  const origin = request.headers.get('Origin');
  return new Response(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('Origin');

  try {
    if (!env.GEMINI_API_KEY) {
      return Response.json(
        { error: 'Missing GEMINI_API_KEY secret' },
        { status: 500, headers: corsHeaders(origin) }
      );
    }

    const body = await request.json();
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!message) {
      return Response.json(
        { error: 'Message is required' },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    if (message.length > 1000) {
      return Response.json(
        { error: 'Message is too long' },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    const model = env.GEMINI_MODEL || 'gemini-1.5-flash';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;

    const upstreamResponse = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: buildSystemPrompt() }],
        },
        contents: [
          {
            role: 'user',
            parts: [{ text: message }],
          },
        ],
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 256,
        },
      }),
    });

    if (!upstreamResponse.ok) {
      const errorText = await upstreamResponse.text();
      return Response.json(
        { error: 'Gemini request failed', details: errorText },
        { status: upstreamResponse.status, headers: corsHeaders(origin) }
      );
    }

    const data = await upstreamResponse.json();
    const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!responseText) {
      return Response.json(
        { error: 'Gemini returned an empty response' },
        { status: 502, headers: corsHeaders(origin) }
      );
    }

    return Response.json(
      { response: responseText },
      { status: 200, headers: corsHeaders(origin) }
    );
  } catch (error) {
    return Response.json(
      { error: 'Unexpected chat error' },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}