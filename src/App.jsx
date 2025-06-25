return (
  <Router>
    {/* Navbar recibe carrito y token para mostrar total y estado de login */}
    <Navbar cart={cart} token={false /* o true si el usuario está logueado */} />

    <div className="container mt-4">
      <Routes>
        <Route
          path="/"
          element={<Home agregarPizzaAlCarrito={agregarPizzaAlCarrito} pizzas={pizzas} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/pizza/:id" element={<Pizza agregarPizzaAlCarrito={agregarPizzaAlCarrito} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>

    <Footer />
  </Router>
)
