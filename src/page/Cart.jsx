import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'
import axios from 'axios'

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  const { token } = useUser()

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  const calcularTotal = () => {
    return cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0)
  }

  const handleCheckout = async () => {
    if (!token) {
      setError('Debes iniciar sesión para poder pagar.')
      return
    }

    if (cart.length === 0) {
      setError('El carrito está vacío.')
      return
    }

    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      const response = await axios.post(
        '/api/checkouts',
        { items: cart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      setMessage('Compra realizada con éxito!')
      clearCart()
      setTimeout(() => setMessage(null), 5000)
    } catch (err) {
      setError(err.response?.data?.message || 'Error al procesar la compra')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>No hay pizzas en el carrito.</p>
      ) : (
        <ul className="list-group mb-3">
          {cart.map(pizza => (
            <li
              key={pizza.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
                <div>
                  <h6 className="my-0">{pizza.name}</h6>
                  <small className="text-muted">
                    ${pizza.price.toLocaleString('es-CL')} c/u
                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(pizza.id)}
                >
                  -
                </button>
                <span>{pizza.quantity}</span>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => addToCart(pizza)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h5>Total: ${calcularTotal().toLocaleString('es-CL')}</h5>

      {cart.length > 0 && (
        <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-success"
            disabled={!token || loading}
            onClick={handleCheckout}
          >
            {loading ? 'Procesando...' : 'Pagar'}
          </button>
          <button className="btn btn-outline-danger" onClick={clearCart} disabled={loading}>
            Vaciar carrito
          </button>
        </div>
      )}

      {!token && cart.length > 0 && (
        <p className="text-danger mt-2">Debes iniciar sesión para poder pagar.</p>
      )}

      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  )
}

export default Cart

