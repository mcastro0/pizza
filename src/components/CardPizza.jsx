function CardPizza({ name, price, ingredients, img, onAgregar }) {
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

        <button className="btn btn-primary w-100" onClick={onAgregar}>
          Pedir ahora
        </button>
      </div>
    </div>
  )
}

export default CardPizza
