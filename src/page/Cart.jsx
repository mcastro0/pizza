import React from 'react';

const Cart = ({ cart, setCart }) => {

  const incrementarCantidad = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
    ));
  };

  const disminuirCantidad = (id) => {
    setCart(cart =>
      cart
        .map(pizza =>
          pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
        )
        .filter(pizza => pizza.cantidad > 0)
    );
  };

  const calcularTotal = () => {
    return cart.reduce((acc, pizza) => acc + pizza.price * pizza.cantidad, 0);
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
                <img src={pizza.img} alt={pizza.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <div>
                  <h6 className="my-0">{pizza.name}</h6>
                  <small className="text-muted">
                    ${pizza.price.toLocaleString('es-CL')} c/u
                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-danger btn-sm" onClick={() => disminuirCantidad(pizza.id)}>-</button>
                <span>{pizza.cantidad}</span>
                <button className="btn btn-outline-success btn-sm" onClick={() => incrementarCantidad(pizza.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h5>Total: ${calcularTotal().toLocaleString('es-CL')}</h5>
      <button className="btn btn-success mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
