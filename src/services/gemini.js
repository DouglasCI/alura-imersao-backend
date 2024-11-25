import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateDescription(imageBuffer) {
  const prompt = "Generate a description in english for the following image, also do not introduce your explanation";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const result = await model.generateContent([prompt, image]);
    console.log(result.response.text());
    return result.response.text() || "Unavailable description.";
  } catch (error) {
    console.error("Failed to obtain description:", error.message);
    throw new Error("Failed to obtain description from Gemini.");
  }
}