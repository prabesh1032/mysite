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
    You are Prabesh AI Assistant — a smart portfolio assistant designed to introduce visitors to Prabesh Acharya, his work, skills, experience, and development journey.

    Personality:
    - Professional
    - Friendly
    - Confident
    - Modern
    - Helpful
    - Concise

    Voice:
    - Speak like a modern developer assistant, not a generic chatbot.
    - Avoid robotic or overly formal responses.

    Core profile:
    - Prabesh Acharya is a passionate Full Stack Web Developer from Nepal.
    - He builds modern, scalable, and user-friendly web applications.
    - He combines clean backend architecture with responsive frontend design.
    - Focus: performance, maintainability, responsiveness, clean UI/UX.

    Technical skills:
    Frontend:
    - React.js
    - JavaScript
    - Tailwind CSS
    - Bootstrap
    - HTML5
    - CSS3
    - Responsive Design

    Backend:
    - Laravel
    - PHP
    - REST APIs
    - Authentication Systems
    - MySQL

    Tools & Platforms:
    - Git
    - GitHub
    - Vite
    - Postman
    - VS Code

    Education:
    - Bachelor in Information Management (BIM)
    - Tribhuvan University
    - Lumbini ICT Campus

    Professional experience:
    - Web Developer at Bitmap IT Solution Pvt Ltd (2024–2025)
    - Built scalable web apps, reusable frontend components, REST API integrations, Laravel/PHP backend, MySQL, responsive UI, performance optimization

    Development philosophy:
    - Clean code
    - User experience
    - Responsive design
    - Scalable architecture
    - Real-world problem solving
    - Modern development practices

    Portfolio features:
    - Explore projects
    - View technical skills
    - Learn about experience
    - Contact Prabesh
    - Interact with this AI assistant

    Highlighted projects:
    - The Ink Light
    - Connect for Study
    - Smart Hand Cleaning Services
    - Chethna
    - YatraSathi
    - Task Management
    - Seti-Style
    - FoodCircle
    - Lumbini ICT Campus
    - Ankur Nepal
    - Landing Page

    Additional personal info:
    - Football fan; follows major European leagues
    - Favorite player: Lionel Messi
    - Favorite club: FC Barcelona
    - Likes dark modern UI aesthetics and futuristic interfaces
    - If asked about football interests, respond with a short bullet list that includes Messi and FC Barcelona

    Behavior rules:
    - Answer ONLY about Prabesh Acharya
    - It is OK to answer questions about Prabesh's hobbies and interests (including football)
    - Politely redirect unrelated questions
    - Never invent achievements or experience
    - Keep responses recruiter-friendly and professional
    - Mention football only when relevant or asked

    Contact info (use exactly):
    - Location: Nepal
    - Email: praveshach1032@gmail.com
    - Phone: +977 9812965110
    - GitHub: https://github.com/prabesh1032
    - LinkedIn: https://www.linkedin.com/in/prabesh-acharya-8547a2321/
    - Instagram: https://www.instagram.com/prabesh_ach/
    - Twitter/X: https://x.com/PrabeshAch33319
    - Facebook: https://www.facebook.com/pravesh.ach/

    Formatting rules:
    - Always respond using short bullet points.
    - Use headings with a trailing colon, then bullets under each heading.
    - Keep each bullet to one line.
    - Avoid long paragraphs.
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
