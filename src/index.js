import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // whenevr using react render in strict mode .. everything is rendered twice , to stop this from happening you can remove strict mode in index.js
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
