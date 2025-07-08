import React from 'react';
import { useCart } from '../context/CartContext'; // ✅ Importar el contexto

function CardPizza({ id, name, price, ingredients, img }) {
  const { addToCart } = useCart(); // ✅ Obtener función para agregar al carrito

  const handleAgregar = () => {
    const producto = { id, name, price, img };
    addToCart(producto);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>

        <ul className="mb-3">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <p className="card-text fw-bold">
          ${price.toLocaleString('es-CL')}
        </p>

        <button className="btn btn-primary w-100" onClick={handleAgregar}>
          Pedir ahora
        </button>
      </div>
    </div>
  );
}

export default CardPizza;

