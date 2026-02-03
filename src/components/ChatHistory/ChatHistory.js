import React from 'react';
import ChatMessage from '../ChatMessage';
import { APP_CONFIG } from '../../constants';
import './ChatHistory.css';

const ChatHistory = ({ history }) => {
  if (history.length === 0) {
    return (
      <div className="chat-history chat-history--empty">
        <p className="chat-history__empty-message">
          {APP_CONFIG.EMPTY_STATE_MESSAGE}
        </p>
      </div>
    );
  }

  return (
    <div className="chat-history">
      {history.map((item) => (
        <ChatMessage
          key={item.id}
          prompt={item.prompt}
          response={item.response}
        />
      ))}
    </div>
  );
};

export default ChatHistory;

