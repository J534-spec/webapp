import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message, onDismiss }) => {
  if (!message) return null;

  return (
    <div className="error-message">
      <span className="error-message__text">{message}</span>
      {onDismiss && (
        <button
          className="error-message__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss error"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;

