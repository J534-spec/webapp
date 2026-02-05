import React, { useEffect, useRef, useState } from 'react';
import { APP_CONFIG } from '../../constants';
import './ChatInput.css';

const ChatInput = ({ onSend, loading }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef(null);

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

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = '0px';
    const next = Math.min(el.scrollHeight, 160);
    el.style.height = `${next}px`;
  }, [input]);

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <div className="chat-input__field-wrapper">
        <textarea
          ref={textareaRef}
          className="chat-input__field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={APP_CONFIG.PLACEHOLDER_TEXT}
          disabled={loading}
          autoFocus
          rows={1}
        />
        <button
          type="submit"
          className="chat-input__send"
          disabled={loading || !input.trim()}
        >
          ↑
        </button>
      </div>
    </form>
  );
};

export default ChatInput;

