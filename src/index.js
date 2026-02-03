import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'development') {
  console.log('Environment check:', {
    NODE_ENV: process.env.NODE_ENV,
    hasApiKey: !!process.env.REACT_APP_GROQ_API_KEY,
    reactAppVars: Object.keys(process.env).filter(key => key.startsWith('REACT_APP_'))
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
