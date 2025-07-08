import { createContext, useState, useEffect, useContext } from 'react';

const PizzaContext = createContext();

export function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPizzas() {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas');
        if (!res.ok) throw new Error('Error al cargar pizzas');
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error }}>
      {children}
    </PizzaContext.Provider>
  );
}

export const usePizzas = () => useContext(PizzaContext);
