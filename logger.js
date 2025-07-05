// logger.js
const axios = require('axios');

const LOG_API_URL = 'http://20.244.56.144/evaluation-service/logs';

async function Log(stack, level, pkg, message, token) {
  try {
    const response = await axios.post(
      LOG_API_URL,
      {
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(`✅ Log Success:`, response.data.message);
  } catch (error) {
    console.error(`❌ Log Error:`, error.response?.data || error.message);
  }
}

module.exports = Log;
