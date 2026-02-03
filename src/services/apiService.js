import axios from 'axios';
import { API_CONFIG } from '../constants';

class ApiService {
  constructor() {
    this.apiKey = process.env.REACT_APP_GROQ_API_KEY;
    
    if (!this.apiKey) {
      console.warn('REACT_APP_GROQ_API_KEY is not set in environment variables');
    }
  }

  async sendMessage(message) {
    if (!this.apiKey) {
      throw new Error('API key is not configured. Please set REACT_APP_GROQ_API_KEY in your .env file');
    }

    if (!message || !message.trim()) {
      throw new Error('Message cannot be empty');
    }

    try {
      const response = await axios.post(
        API_CONFIG.BASE_URL,
        {
          model: API_CONFIG.MODEL,
          messages: [{ role: 'user', content: message.trim() }],
          temperature: API_CONFIG.TEMPERATURE,
          max_tokens: API_CONFIG.MAX_TOKENS,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      const aiResponse = response.data.choices[0]?.message?.content?.trim();
      
      if (!aiResponse) {
        throw new Error('No response received from API');
      }

      return aiResponse;
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const errorMessage = error.response.data?.error?.message || 'Unknown error';
        throw new Error(`API Error (${status}): ${errorMessage}`);
      } else if (error.request) {
        throw new Error('Network error: No response from server');
      } else {
        throw new Error(error.message || 'An unexpected error occurred');
      }
    }
  }
}

export default new ApiService();

