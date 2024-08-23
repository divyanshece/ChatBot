// const { GenerativeModel, configure } = require('@google/generative-ai');

// configure({
//   apiKey: 'AIzaSyBFRDSTJKg0fUJ24KaBKnSMwUbRmPvlRjg',
// });

// // Create the model
// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: 'text/plain',
// };

// const model = new GenerativeModel({
//   modelName: 'gemini-1.5-flash',
//   generationConfig: generationConfig,
// });

// const chatSession = model.startChat({ history: [] });

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('You: ', async (query) => {
//   try {
//     const response = await chatSession.sendMessage(query);
//     console.log('Gemini: ', response.text);
//   } catch (error) {
//     console.error('Error:', error);
//   }
//   readline.close();
// });
API_KEY="AIzaSyBFRDSTJKg0fUJ24KaBKnSMwUbRmPvlRjg"

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run() {
  const prompt = "Write a story about an AI and magic"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();