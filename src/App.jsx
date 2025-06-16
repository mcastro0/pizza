import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import RegisterPage from './page/RegisterPage'
import LoginPage from './page/LoginPage'
import Cart from "./components/Cart"
import pizzas from './data/pizzas'

function App() {
  const [view, setView] = useState('home') // vista actual: home | register | login | cart
  const [cart, setCart] = useState([]) // estado global del carrito

  // Función para agregar una pizza al carrito
  const agregarPizzaAlCarrito = (pizzaId) => {
    setCart((currentCart) => {
      const existe = currentCart.find(p => p.id === pizzaId)
      if (existe) {
        return currentCart.map(p =>
          p.id === pizzaId ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      }
      const pizzaAgregar = pizzas.find(p => p.id === pizzaId)
      return [...currentCart, { ...pizzaAgregar, cantidad: 1 }]
    })
  }

  return (
    <>
      <Navbar onChangeView={setView} />

      <div className="container mt-4">
        {view === 'home' && <Home agregarPizzaAlCarrito={agregarPizzaAlCarrito} />}
        {view === 'register' && <RegisterPage />}
        {view === 'login' && <LoginPage />}
        {view === 'cart' && <Cart cart={cart} setCart={setCart} />}
      </div>

      <Footer />
    </>
  )
}

export default App
