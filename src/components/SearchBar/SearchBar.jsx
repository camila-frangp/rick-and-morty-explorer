import './SearchBar.scss';

// Componente controlado: los valores y los cambios los maneja la página que lo usa
function SearchBar({ busqueda, estado, genero, onBusquedaChange, onEstadoChange, onGeneroChange, onLimpiar }) {
  const hayFiltros = busqueda !== '' || estado !== '' || genero !== '';

  return (
    <form className="search-bar" role="search" onSubmit={(e) => e.preventDefault()}>
      <div className="search-bar__field search-bar__field--grow">
        <label htmlFor="busqueda">Nombre</label>
        <input
          id="busqueda"
          type="search"
          placeholder="Ej: Rick, Morty, Summer..."
          value={busqueda}
          onChange={(e) => onBusquedaChange(e.target.value)}
        />
      </div>

      <div className="search-bar__field">
        <label htmlFor="estado">Estado</label>
        <select id="estado" value={estado} onChange={(e) => onEstadoChange(e.target.value)}>
          <option value="">Todos</option>
          <option value="alive">Vivo</option>
          <option value="dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      <div className="search-bar__field">
        <label htmlFor="genero">Género</label>
        <select id="genero" value={genero} onChange={(e) => onGeneroChange(e.target.value)}>
          <option value="">Todos</option>
          <option value="female">Femenino</option>
          <option value="male">Masculino</option>
          <option value="genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      <button type="button" className="search-bar__clear" onClick={onLimpiar} disabled={!hayFiltros}>
        Limpiar filtros
      </button>
    </form>
  );
}

export default SearchBar;
