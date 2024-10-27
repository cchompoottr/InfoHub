import './style.css'; 
import React from 'react';
import { createRoot } from 'react-dom/client'; // เปลี่ยนจาก react-dom
import App from './App';

const root = createRoot(document.getElementById('root')); // ใช้ createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


