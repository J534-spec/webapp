import React from 'react';
import { useChat } from './hooks/useChat';
import Header from './components/Header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import ErrorMessage from './components/ErrorMessage';
import { APP_CONFIG } from './constants';
import './App.css';

function App() {
  const { history, loading, error, sendMessage, clearHistory } = useChat();

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        
        <ChatHistory history={history} />
        
        <ErrorMessage 
          message={error} 
          onDismiss={() => clearHistory()} 
        />
        
        <ChatInput onSend={sendMessage} loading={loading} />
        
        {history.length > 0 && (
          <button 
            onClick={clearHistory} 
            className="app__clear-button"
            aria-label="Clear chat history"
          >
            {APP_CONFIG.CLEAR_BUTTON_TEXT}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
