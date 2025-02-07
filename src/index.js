import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import App
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // Only wrap with Router here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App /> {/* App should handle routing */}
  </Router>
);

reportWebVitals();
