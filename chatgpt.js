const axios = require('axios');

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

const discussionBody = process.env.DISCUSSION_BODY;

const generate = async () => {
  try {
    const response = await axios.post(API_URL, {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: discussionBody }],
      max_tokens: 100,
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const generatedResponse = response.data.choices[0].text.trim();
    console.log('Generated Response:', generatedResponse);
  } catch (error) {
    console.error('Error:', error);
  }
};

generate();
