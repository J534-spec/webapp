import React from 'react';
import { APP_CONFIG } from '../../constants';
import './Header.css';

const Header = ({ theme, onToggleTheme, onClearHistory }) => {
  const isDark = theme === 'dark';

  return (
    <header className="header">
      <div className="header__text">
        <h1 className="header__title">{APP_CONFIG.APP_NAME}</h1>
        <p className="header__subtitle">{APP_CONFIG.APP_DESCRIPTION}</p>
      </div>
      <div className="header__actions">
        {onClearHistory && (
          <button
            type="button"
            className="header__icon-button"
            onClick={onClearHistory}
            aria-label="Clear chat history"
            title="Clear chat history"
          >
            <svg
              className="header__icon-trash"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5.5 2.5V1.5C5.5 1.22386 5.72386 1 6 1H10C10.2761 1 10.5 1.22386 10.5 1.5V2.5M2 3.5H14M12.5 3.5V13.5C12.5 14.0523 12.0523 14.5 11.5 14.5H4.5C3.94772 14.5 3.5 14.0523 3.5 13.5V3.5M6 7V11.5M10 7V11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="header__icon-label">Clear history</span>
          </button>
        )}
        {onToggleTheme && (
          <button
            type="button"
            className="header__theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="header__theme-icon" aria-hidden="true">
              {isDark ? '🌙' : '☀️'}
            </span>
            <span className="header__theme-label">
              {isDark ? 'Dark' : 'Light'}
            </span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

