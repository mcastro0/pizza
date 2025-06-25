import React, { useState } from 'react'

const Profile = () => {
  // Simulamos un usuario logueado con email
  const [email, setEmail] = useState('usuario@example.com')

  // Función para cerrar sesión (aquí solo limpia el email)
  const handleLogout = () => {
    // Aquí puedes añadir lógica real de logout
    setEmail(null)
    alert('Has cerrado sesión')
  }

  if (!email) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>No estás logueado.</h2>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Perfil de usuario</h1>
      <p>Email: <strong>{email}</strong></p>
      <button 
        onClick={handleLogout} 
        style={{
          padding: '10px 20px',
          backgroundColor: '#d9534f',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Cerrar sesión
      </button>
    </div>
  )
}

export default Profile
