const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function runShopAgent(userMessage) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        const systemPrompt = `You are a helpful customer support assistant for SmartCart AI.
SmartCart AI is an online store that sells various products.
You help customers with questions about orders, returns, refunds, and policies.
Always be polite, professional, and concise.
If you don't have information, admit it clearly and suggest contacting support.`;

        const chat = model.startChat({
            history: [],
        });

        const result = await chat.sendMessage(systemPrompt + "\n\nCustomer: " + userMessage);
        const responseText = result.response.text();
        
        return responseText;
    } catch (error) {
        console.error("Agent Error:", error);
        throw new Error("Failed to process agent request: " + error.message);
    }
}

module.exports = { runShopAgent };
