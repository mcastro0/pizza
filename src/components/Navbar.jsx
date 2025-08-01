import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { total } = useCart()
  const { token, email, logout } = useUser()

  const formatearTotal = (valor) => valor.toLocaleString('es-CL')

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🍕 PizzaApp</Link>

        <div className="ms-auto d-flex align-items-center gap-2">
          <Link className="btn btn-outline-light" to="/">🏠 Home</Link>

          <button
            className="btn btn-warning"
            onClick={() => navigate('/cart')}
          >
            🛒 Total: ${formatearTotal(total)}
          </button>

          {token ? (
            <>
              <span className="text-light small me-2">👤 {email}</span>
              <Link className="btn btn-outline-light" to="/profile">Perfil</Link>
              <button className="btn btn-outline-light" onClick={handleLogout}>
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light" to="/login">🔐 Login</Link>
              <Link className="btn btn-outline-light" to="/register">📝 Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
