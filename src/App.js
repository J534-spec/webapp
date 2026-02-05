import React, { useEffect, useRef, useState } from 'react';
import { useChat } from './hooks/useChat';
import Header from './components/Header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const { history, loading, error, sendMessage, clearHistory } = useChat();
  const scrollToBottomRef = useRef(null);

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return window.localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      <div className="app__container">
        <Header
          onToggleTheme={toggleTheme}
          theme={theme}
          onClearHistory={history.length > 0 ? clearHistory : undefined}
        />

        <ChatHistory 
          history={history} 
          scrollToBottomRef={scrollToBottomRef}
        />
        
        <ErrorMessage 
          message={error} 
          onDismiss={() => clearHistory()} 
        />
        
        <ChatInput onSend={sendMessage} loading={loading} />
      </div>
    </div>
  );
}

export default App;
