import './Pagination.scss';

// Arma la lista de páginas a mostrar: la primera, la última y las cercanas a la actual.
// Los saltos se marcan con '...'. Ejemplo con 42 páginas estando en la 10: 1 ... 9 10 11 ... 42
function calcularPaginas(paginaActual, totalPaginas) {
  const paginas = [];

  for (let pagina = 1; pagina <= totalPaginas; pagina++) {
    const esExtremo = pagina === 1 || pagina === totalPaginas;
    const esCercana = Math.abs(pagina - paginaActual) <= 1;

    if (esExtremo || esCercana) {
      paginas.push(pagina);
    } else if (paginas[paginas.length - 1] !== '...') {
      paginas.push('...');
    }
  }

  return paginas;
}

function Pagination({ paginaActual, totalPaginas, onCambiarPagina }) {
  if (totalPaginas <= 1) return null;

  const paginas = calcularPaginas(paginaActual, totalPaginas);

  return (
    <nav className="pagination" aria-label="Paginado">
      <button
        className="pagination__button"
        onClick={() => onCambiarPagina(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        ← Anterior
      </button>

      <ul className="pagination__pages">
        {paginas.map((pagina, index) =>
          pagina === '...' ? (
            <li key={`salto-${index}`} className="pagination__dots">
              ...
            </li>
          ) : (
            <li key={pagina}>
              <button
                className={`pagination__page ${pagina === paginaActual ? 'pagination__page--active' : ''}`}
                onClick={() => onCambiarPagina(pagina)}
                aria-current={pagina === paginaActual ? 'page' : undefined}
              >
                {pagina}
              </button>
            </li>
          )
        )}
      </ul>

      <button
        className="pagination__button"
        onClick={() => onCambiarPagina(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
      >
        Siguiente →
      </button>
    </nav>
  );
}

export default Pagination;
