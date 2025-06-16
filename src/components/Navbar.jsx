import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const Navbar = ({ onChangeView }) => {
  const token = false // cambiar a true para simular login
  const total = 25000

  const formatearTotal = (valor) => {
    return valor.toLocaleString('es-CL') // Ej: 25.000
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">🍕 PizzaApp</a>

        <div className="ms-auto d-flex gap-2">
          {/* SIEMPRE visibles */}
          <button className="btn btn-outline-light" onClick={() => onChangeView('home')}>🏠 Home</button>
          <button 
            className="btn btn-warning" 
            onClick={() => onChangeView('cart')}
          >
            🛒 Total: ${formatearTotal(total)}
          </button>

          {/* Condicional según token */}
          {token ? (
            <>
              <button className="btn btn-outline-light">🔓 Profile</button>
              <button className="btn btn-outline-light">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light" onClick={() => onChangeView('login')}>🔐 Login</button>
              <button className="btn btn-outline-light" onClick={() => onChangeView('register')}>🔐 Register</button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
