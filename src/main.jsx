import React from 'react';
import ReactDOM from 'react-dom'; // Importa desde 'react-dom' en lugar de 'react-dom/client'
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
