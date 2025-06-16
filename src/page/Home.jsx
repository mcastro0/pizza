import React from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import pizzas from '../data/pizzas' // Asegúrate de que esta ruta sea correcta

const Home = ({ agregarPizzaAlCarrito }) => {
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
