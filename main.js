const axios = require('axios');

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

const discussionBody = "What is Github?"; //process.env.DISCUSSION_BODY;

const generate = async () => {
  try {
    const response = await axios.post(API_URL, {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: discussionBody }],
      max_tokens: 100
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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",
      },
    });
    console.log('API_URL:', API_URL);
    console.log('discussionBody:', discussionBody);
    console.log('response', response.data);
    const generatedResponse = response.data.choices[0].text;
    console.log('Generated Response:', generatedResponse);
  } catch (error) {
    console.error('Error:', error);
  }
};

generate();

