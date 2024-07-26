// src/assets/RestorePage.jsx
import React from 'react';

const RestorePage = ({ setContent }) => {
  return (
    <div id="content">
      <h1>This is a Simple Page restored</h1>
      <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
  );
};

export default RestorePage;
