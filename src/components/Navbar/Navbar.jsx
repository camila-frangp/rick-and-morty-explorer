import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ titulo, opciones }) {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__portal" aria-hidden="true"></span>
          {titulo}
        </Link>
        <ul className="navbar__menu">
          {opciones.map((opcion) => (
            <li key={opcion.url}>
              {/* NavLink agrega la clase "active" al link de la página actual */}
              <NavLink to={opcion.url} end className="navbar__link">
                {opcion.nombre}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
