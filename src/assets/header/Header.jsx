// src/assets/header/Header.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/Header.css';
import SimplePage from '../SimplePage';
import OriginalPage from '../OriginalPage';

const Header = () => {
  const loadSimplePage = () => {
    const content = document.getElementById('content');
    if (content) {
      const root = createRoot(content);
      root.render(<SimplePage />);
    }
  };

  const loadOriginalPage = () => {
    const content = document.getElementById('content');
    if (content) {
      const root = createRoot(content);
      root.render(<OriginalPage />);
    }
  };

  return (
    <header className="header">
      <div className="header-left"></div>
      <div className="header-right">
        <div className="header-section">
          <a href="#" onClick={loadOriginalPage}>Section 1</a>
        </div>
        <div className="header-section">
          <a href="#" onClick={loadSimplePage}>Section 2</a>
        </div>
        <div className="header-section">Section 3</div>
      </div>
    </header>
  );
};

export default Header;
