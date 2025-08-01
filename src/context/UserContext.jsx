import React, { createContext, useState, useContext } from 'react'
import axios from 'axios'

const UserContext = createContext()
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null)
  const [email, setEmail] = useState(() => localStorage.getItem('email') || null)
  const [profile, setProfile] = useState(null) // estado para perfil

  const login = async (credentials) => {
    try {
      const response = await axios.post('/api/auth/login', credentials)
      const { token, email } = response.data
      setToken(token)
      setEmail(email)
      localStorage.setItem('token', token)
      localStorage.setItem('email', email)
      return { success: true }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Error al iniciar sesión' }
    }
  }

  const register = async (userData) => {
    try {
      const response = await axios.post('/api/auth/register', userData)
      const { token, email } = response.data
      setToken(token)
      setEmail(email)
      localStorage.setItem('token', token)
      localStorage.setItem('email', email)
      return { success: true }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Error al registrarse' }
    }
  }

  const logout = () => {
    setToken(null)
    setEmail(null)
    setProfile(null)
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }

  // Método para obtener perfil del usuario autenticado
  const getProfile = async () => {
    if (!token) return null

    try {
      const response = await axios.get('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setProfile(response.data)
      return response.data
    } catch (error) {
      console.error('Error al obtener perfil:', error.response?.data || error.message)
      return null
    }
  }

  return (
    <UserContext.Provider value={{ token, email, profile, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  )
}
