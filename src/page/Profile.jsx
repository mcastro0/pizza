import React from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { email, logout, token } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    alert('Has cerrado sesión')
    navigate('/login')
  }

  if (!token) {
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
