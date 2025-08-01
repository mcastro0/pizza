import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'

// Contextos
import { UserProvider } from './context/UserContext'
import { PizzaProvider } from './context/PizzaContext'
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  </React.StrictMode>
)
