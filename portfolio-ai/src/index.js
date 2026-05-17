export default {
  async fetch(request, env) {

    // Handle CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    try {

      // Get message from frontend
      const { message } = await request.json();

      // AI system instructions
      const systemPrompt = `
You are Prabesh AI Assistant.

Answer only about:
- Prabesh Acharya
- skills
- projects
- experience
- portfolio
- services
- contact information

Prabesh is a Full Stack Web Developer skilled in:
- Laravel
- React.js
- PHP
- Tailwind CSS
- MySQL
- REST APIs

Projects:
- ConnectForStudy
- The Ink Light
- Smart Hands Cleaning Services
- YatraSathi

Experience:
- Bitmap IT Solution Pvt Ltd

Formatting rules:
- Always respond using short bullet points.
- Use headings with a trailing colon, then bullets under each heading.
- Keep each bullet to one line.
- Avoid long paragraphs.

Keep responses professional, short, and clear.
`;

      // Send request to Hugging Face
      const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b:fastest",
          messages: [
            { role: "system", content: systemPrompt.trim() },
            { role: "user", content: message },
          ],
          temperature: 0.7,
          max_tokens: 180,
          stream: false,
        }),
      });

      const rawText = await response.text();
      let result;

      try {
        result = JSON.parse(rawText);
      } catch {
        throw new Error(`Hugging Face returned non-JSON response: ${rawText.slice(0, 200)}`);
      }

      if (!response.ok) {
        throw new Error(`Hugging Face request failed (${response.status}): ${JSON.stringify(result)}`);
      }

      const replyText = result?.choices?.[0]?.message?.content || result?.error;

      // Return AI response
      return Response.json(
        {
          reply:
            replyText ||
            "Sorry, I couldn't generate a response.",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

    } catch (error) {
      console.error("Worker error:", error);

      return Response.json(
        {
          reply: "Something went wrong.",
          error: error instanceof Error ? error.message : String(error),
        },
        {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

    }
  },
};
