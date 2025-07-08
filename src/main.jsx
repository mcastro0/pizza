import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import { PizzaProvider } from './context/PizzaContext'; // Importa el nuevo contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PizzaProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PizzaProvider>
  </React.StrictMode>
);
