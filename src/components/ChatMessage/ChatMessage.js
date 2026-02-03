import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ prompt, response }) => {
  return (
    <div className="chat-message">
      <div className="chat-message__user">
        <span className="chat-message__label">You:</span>
        <p className="chat-message__text">{prompt}</p>
      </div>
      <div className="chat-message__ai">
        <span className="chat-message__label">AI:</span>
        <p className="chat-message__text">{response}</p>
      </div>
    </div>
  );
};

export default ChatMessage;

