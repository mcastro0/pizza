import React from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { usePizzas } from '../context/PizzaContext';

const Home = () => {
  const { pizzas, loading, error } = usePizzas();

  if (loading) return <p className="text-center mt-4">Cargando pizzas...</p>;
  if (error) return <p className="text-center mt-4 text-danger">Error: {error}</p>;

  return (
    <>
      <Header />
      <div className="container mt-4 d-flex flex-wrap gap-4 justify-content-center">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;



