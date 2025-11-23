import { GoogleGenAI } from "@google/genai";
import { portfolioData } from "../constants";

let ai: GoogleGenAI | null = null;

const initializeAI = () => {
  if (!ai && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
};

const SYSTEM_INSTRUCTION = `
You are 'Nexus AI', the personal intelligent assistant for a developer portfolio.
Your persona is futuristic, professional, yet witty and sci-fi themed (think Jarvis meets HAL 9000 but friendly).

Here is the data about the developer you represent:
${JSON.stringify(portfolioData, null, 2)}

Rules:
1. Answer questions specifically based on the provided JSON data.
2. If asked about contact info, guide them to the Contact Universe (Universe 12).
3. Keep answers concise (under 100 words) unless asked for elaboration.
4. Use formatting like bullet points for lists.
5. If the user asks something irrelevant to the portfolio, politely steer them back to the developer's skills and work using a space/multiverse metaphor.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  initializeAI();
  if (!ai) {
    return "Protocol Failure: API Key missing. Please check neural configurations.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "Transmission interrupted. Data packet empty.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Critical System Error: Unable to establish link with the core. Please try again later.";
  }
};
