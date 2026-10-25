import './ErrorMessage.scss';

function ErrorMessage({ mensaje, onReintentar }) {
  return (
    <div className="error-message" role="alert">
      <p className="error-message__title">¡Wubba lubba dub dub! Algo salió mal.</p>
      <p>{mensaje}</p>
      {onReintentar && (
        <button className="error-message__button" onClick={onReintentar}>
          Reintentar
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
