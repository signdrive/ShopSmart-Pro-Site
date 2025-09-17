// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './input.css' // ← This triggers Tailwind build

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)