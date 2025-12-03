import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateBio = async (currentBio: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("API Key not found, returning mock response");
      return "Stack is a custom software development company. For 11 years, we've been creating impactful custom-built software.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Rewrite the following company bio to be more professional, punchy, and modern, keeping it under 30 words: "${currentBio}"`,
    });

    return response.text || currentBio;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return currentBio;
  }
};

export const generateProjectSummary = async (completed: number, total: number): Promise<string> => {
   try {
    if (!process.env.API_KEY) return "Project is currently on track.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a very short (1 sentence) encouraging status update for a project that has completed ${completed} out of ${total} tasks.`,
    });

    return response.text || "Status updated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Status updated.";
  }
}
