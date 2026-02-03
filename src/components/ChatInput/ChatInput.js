import React, { useState } from 'react';
import { APP_CONFIG } from '../../constants';
import './ChatInput.css';

const ChatInput = ({ onSend, loading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input__field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={APP_CONFIG.PLACEHOLDER_TEXT}
        disabled={loading}
        autoFocus
      />
      <button
        type="submit"
        className="chat-input__button"
        disabled={loading || !input.trim()}
      >
        {loading ? APP_CONFIG.LOADING_TEXT : APP_CONFIG.SEND_BUTTON_TEXT}
      </button>
    </form>
  );
};

export default ChatInput;

