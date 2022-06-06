import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GildedRoseProvider from 'store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GildedRoseProvider>
    <App />
  </GildedRoseProvider>
);

reportWebVitals();
