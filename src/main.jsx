import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Creamos el root y renderizamos la app
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
