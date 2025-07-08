import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importar el contexto

const Navbar = ({ token }) => {
  const navigate = useNavigate();
  const { total } = useCart(); // Obtener total directamente desde contexto

  const formatearTotal = (valor) => {
    return valor.toLocaleString('es-CL'); // Ej: 25.000
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        {/* Link a home */}
        <Link className="navbar-brand" to="/">🍕 PizzaApp</Link>

        <div className="ms-auto d-flex gap-2">
          {/* Navegación con Links */}
          <Link className="btn btn-outline-light" to="/">🏠 Home</Link>

          <button 
            className="btn btn-warning" 
            onClick={() => navigate('/cart')}
          >
            🛒 Total: ${formatearTotal(total)}
          </button>

          {/* Condicional según token */}
          {token ? (
            <>
              <Link className="btn btn-outline-light" to="/profile">🔓 Profile</Link>
              <button className="btn btn-outline-light" onClick={() => alert('Cerrar sesión')}>
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light" to="/login">🔐 Login</Link>
              <Link className="btn btn-outline-light" to="/register">🔐 Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


