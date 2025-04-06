import { GoogleGenAI } from "@google/genai";

/* const ai = new GoogleGenAI({
  apiKey: "AIzaSyBFksSB258zBS2qqeznmCu3N9g8plRiExU",
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(response.text);
}

export default main; */

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBFksSB258zBS2qqeznmCu3N9g8plRiExU",
});

async function main(prompt) {
  const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [],
  });

  const response = await chat.sendMessage({
    message: prompt,
  });
  console.log("Chat response 1:", response.text);
  return response.text;
}

export default main;
