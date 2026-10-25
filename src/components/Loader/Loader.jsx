import './Loader.scss';

function Loader({ texto = 'Cargando...' }) {
  return (
    <div className="loader" role="status">
      <span className="loader__portal" aria-hidden="true"></span>
      <p>{texto}</p>
    </div>
  );
}

export default Loader;
