import React, { useCallback, useEffect, useRef, useState } from 'react';
import ChatMessage from '../ChatMessage';
import { APP_CONFIG } from '../../constants';
import './ChatHistory.css';

const ChatHistory = ({ history, scrollToBottomRef }) => {
  const containerRef = useRef(null);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const handleScrollToBottom = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      const atBottom = scrollHeight - scrollTop - clientHeight < 50;
      const shouldShow = !atBottom && scrollHeight > clientHeight;
      setShowScrollDown(shouldShow);
    };

    handleScroll();
    const timeoutId = setTimeout(handleScroll, 100);
    
    el.addEventListener('scroll', handleScroll);
    el.addEventListener('resize', handleScroll);
    
    return () => {
      clearTimeout(timeoutId);
      el.removeEventListener('scroll', handleScroll);
      el.removeEventListener('resize', handleScroll);
    };
  }, [history]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    if (scrollToBottomRef) {
      scrollToBottomRef.current = handleScrollToBottom;
    }
  }, [scrollToBottomRef, handleScrollToBottom]);

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
    <div className="chat-history-wrapper">
      <div ref={containerRef} className="chat-history">
        {history.map((item) => (
          <ChatMessage
            key={item.id}
            prompt={item.prompt}
            response={item.response}
          />
        ))}
      </div>
      {showScrollDown && (
        <button
          type="button"
          className="chat-history__scroll-down"
          onClick={handleScrollToBottom}
          aria-label="Scroll to latest message"
          title="Scroll to bottom"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatHistory;

