import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
// Самый главный файл, структура идет в body в index.html


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


