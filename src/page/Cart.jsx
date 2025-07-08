import React from 'react';
import { useCart } from '../context/CartContext'; // ✅ Importar contexto

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart(); // ✅ Obtener funciones del contexto

  const calcularTotal = () => {
    return cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
  };

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>No hay pizzas en el carrito.</p>
      ) : (
        <ul className="list-group mb-3">
          {cart.map(pizza => (
            <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
                <div>
                  <h6 className="my-0">{pizza.name}</h6>
                  <small className="text-muted">
                    ${pizza.price.toLocaleString('es-CL')} c/u
                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(pizza.id)}
                >
                  -
                </button>
                <span>{pizza.quantity}</span>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => addToCart(pizza)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h5>Total: ${calcularTotal().toLocaleString('es-CL')}</h5>

      {cart.length > 0 && (
        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-success">Pagar</button>
          <button className="btn btn-outline-danger" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
