//const axios = require('axios');
//const fetch = require('node-fetch');
import fetch from "node-fetch";
//const fetch = fetch(import.meta.url);

global.require = fetch; //this will make require at the global scobe and treat it like the original require

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

const discussionBody = "\"What is Github?\""; 
const generate = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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",
      },
      body: JSON.stringify({
        messages: [{ role: "system", content: discussionBody }],
        max_tokens: 100,
        model: "gpt-3.5-turbo"
      })
  
    });
    const responseData = await response.json();
    if (Array.isArray(responseData.choices) && responseData.choices.length > 0) {
      const assistantReply = responseData.choices[0].message.content;
      console.log("Assistant:", assistantReply);
  } else {
      console.log("No valid response from the assistant.");
  }
    console.log('API_URL:', API_URL);
    const generatedResponse = responseData;
  } catch (error) {
    console.error('Error:', error);
  }
};

generate();

