import { useState, useCallback } from 'react';
import apiService from '../services/apiService';

export const useChat = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async (message) => {
    if (!message || !message.trim()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await apiService.sendMessage(message);
      
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          id: Date.now(),
          prompt: message.trim(),
          response,
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (err) {
      setError(err.message || 'Failed to get response from AI');
      console.error('Chat error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setError(null);
  }, []);

  return {
    history,
    loading,
    error,
    sendMessage,
    clearHistory,
  };
};

