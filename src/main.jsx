// main.jsx

// Add tab title code
const originalTitle = "Appaji Dheeraj";
const inactiveTitles = [
  "🥺 Come back",
  "💔 tab’s lonely",
  "😢 I miss you",
  "👀 Are you still there?",
  "😐 I’m still here",
  "😞 Waiting for you",
];

// Set initial title
document.title = originalTitle;

// Function to get a random inactive title
const getRandomInactiveTitle = () => {
  const randomIndex = Math.floor(Math.random() * inactiveTitles.length);
  return inactiveTitles[randomIndex];
};

// Handle visibility change
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Tab is now inactive/hidden
    document.title = getRandomInactiveTitle();
  } else {
    // Tab is active again
    document.title = originalTitle;
  }
});

// Your existing React code below
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)