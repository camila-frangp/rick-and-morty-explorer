import { Link, useLocation } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  // Muestra la ruta que el usuario intentó abrir
  const { pathname } = useLocation();

  return (
    <section className="not-found">
      <div className="not-found__portal" aria-hidden="true"></div>
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Esta dimensión no existe</h2>
      <p className="not-found__text">
        Buscamos <code>{pathname}</code> en todo el multiverso y no encontramos nada. Quizás el portal te dejó en el
        lugar equivocado.
      </p>
      <div className="not-found__actions">
        <Link to="/" className="not-found__button">
          Volver al inicio
        </Link>
        <Link to="/personajes" className="not-found__button not-found__button--secondary">
          Ver personajes
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
