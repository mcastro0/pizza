import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import RegisterPage from './page/RegisterPage'
import LoginPage from './page/LoginPage'
import Cart from './components/Cart'
import Pizza from './components/Pizza'
function App() {
  const [view, setView] = useState('home') // vista actual
  const [cart, setCart] = useState([]) // carrito
  const [pizzas, setPizzas] = useState([]) // pizzas traídas desde la API

  // Traer pizzas del backend
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas')
        const data = await res.json()
        setPizzas(data)
      } catch (err) {
        console.error('Error al cargar las pizzas:', err)
      }
    }

    fetchPizzas()
  }, [])

  // Agregar pizza al carrito
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
