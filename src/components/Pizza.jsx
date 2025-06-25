// src/components/Pizza.jsx
import React, { useEffect, useState } from 'react'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas/p001')
        const data = await res.json()
        setPizza(data)
      } catch (error) {
        console.error('Error al obtener la pizza:', error)
      }
    }

    fetchPizza()
  }, [])

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>
  }

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <img src={pizza.img} alt={pizza.name} className="img-fluid mb-4" style={{ maxWidth: '400px' }} />
      <h1 className="text-capitalize">{pizza.name}</h1>
      <p className="mt-3"><strong>Descripción:</strong> {pizza.desc}</p>
      <h5 className="mt-4">Ingredientes:</h5>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <p className="mt-3"><strong>Precio:</strong> ${pizza.price}</p>
      <button className="btn btn-success mt-3" disabled>Añadir al carrito</button>
    </div>
  )
}

export default Pizza
