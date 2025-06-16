import pizzaBg from '../img/Header.jpg';

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${pizzaBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '100px 0',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
  };

  return (
    <header style={headerStyle} className="text-center">
      <h1>Bienvenido a PizzaApp</h1>
      <p>Las mejores pizzas artesanales, hechas con amor y los mejores ingredientes.</p>
    </header>
  );
};

export default Header;
