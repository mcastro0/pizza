import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        borderRadius: '8px',
        marginTop: '40px',
      }}
    >
      <h1 style={{ fontSize: '5rem', marginBottom: '0.5rem' }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link
        to="/"
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#721c24',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
