import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App saludo="Hola" >
      <h1>
        Buenas esto es un título
      </h1>
    </App>
);

