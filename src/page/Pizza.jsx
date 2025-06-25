import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pizza = ({ agregarPizzaAlCarrito }) => {
  const { id } = useParams() // obtiene el id de la URL
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true)
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
        if (!res.ok) throw new Error('Pizza no encontrada')
        const data = await res.json()
        setPizza(data)
      } catch (error) {
        console.error('Error al obtener la pizza:', error)
        setPizza(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPizza()
  }, [id])

  if (loading) {
    return <p className="text-center mt-5">Cargando pizza...</p>
  }

  if (!pizza) {
    return <p className="text-center mt-5 text-danger">Pizza no encontrada.</p>
  }

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="img-fluid mb-4"
        style={{ maxWidth: '400px' }}
      />
      <h1 className="text-capitalize">{pizza.name}</h1>
      <p className="mt-3">
        <strong>Descripción:</strong> {pizza.desc}
      </p>
      <h5 className="mt-4">Ingredientes:</h5>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <p className="mt-3">
        <strong>Precio:</strong> ${pizza.price}
      </p>
      <button
        className="btn btn-success mt-3"
        onClick={() => agregarPizzaAlCarrito(pizza.id)}
      >
        Añadir al carrito
      </button>
    </div>
  )
}

export default Pizza
