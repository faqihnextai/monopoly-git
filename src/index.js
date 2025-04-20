import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: You can include global styles here
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// serviceWorkerRegistration.register();
// Create a root element to render the App
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(
      registration => {
        console.log('Service Worker registered: ', registration);
      },
      error => {
        console.log('Service Worker registration failed: ', error);
      }
    );
  });
}
