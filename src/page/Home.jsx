import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = ({ agregarPizzaAlCarrito }) => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas')
        const data = await res.json()
        setPizzas(data)
      } catch (error) {
        console.error('Error al obtener las pizzas:', error)
      }
    }

    fetchPizzas()
  }, [])

  return (
    <>
      <Header />
      <div className="container mt-4 d-flex flex-wrap gap-4 justify-content-center">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            onAgregar={() => agregarPizzaAlCarrito(pizza.id)}
          />
        ))}
      </div>
    </>
  )
}

export default Home

