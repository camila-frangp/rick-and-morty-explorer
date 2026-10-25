import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/api';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './Characters.scss';

function Characters() {
  const [personajes, setPersonajes] = useState([]);
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  // Cambiar este valor vuelve a ejecutar el useEffect (lo usa el botón "Reintentar")
  const [intento, setIntento] = useState(0);

  // Filtros
  const [busqueda, setBusqueda] = useState(''); // lo que el usuario escribe
  const [nombre, setNombre] = useState(''); // lo que se envía a la API
  const [estado, setEstado] = useState('');
  const [genero, setGenero] = useState('');

  // Búsqueda en tiempo real: espera 500 ms desde la última tecla antes de buscar,
  // así no se hace una petición a la API por cada letra
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setNombre(busqueda.trim());
    }, 500);

    return () => clearTimeout(temporizador);
  }, [busqueda]);

  useEffect(() => {
    // Evita guardar la respuesta si el componente se desmontó o si los filtros cambiaron antes de que llegue
    let ignorar = false;

    async function cargarPersonajes() {
      setCargando(true);
      setError(null);
      try {
        const data = await getCharacters({ name: nombre, status: estado, gender: genero });
        if (!ignorar) {
          setPersonajes(data.results);
          setTotal(data.info.count);
        }
      } catch (err) {
        if (!ignorar) setError(err.message);
      } finally {
        if (!ignorar) setCargando(false);
      }
    }

    cargarPersonajes();

    return () => {
      ignorar = true;
    };
  }, [nombre, estado, genero, intento]);

  function limpiarFiltros() {
    setBusqueda('');
    setNombre('');
    setEstado('');
    setGenero('');
  }

  return (
    <section className="characters">
      <header className="characters__header">
        <h1 className="characters__title">Personajes</h1>
        {!cargando && !error && <p className="characters__count">{total} personajes encontrados</p>}
      </header>

      <SearchBar
        busqueda={busqueda}
        estado={estado}
        genero={genero}
        onBusquedaChange={setBusqueda}
        onEstadoChange={setEstado}
        onGeneroChange={setGenero}
        onLimpiar={limpiarFiltros}
      />

      {cargando && <Loader texto="Abriendo un portal..." />}
      {error && <ErrorMessage mensaje={error} onReintentar={() => setIntento(intento + 1)} />}
      {!cargando && !error && personajes.length === 0 && (
        <p className="characters__empty">
          No encontramos personajes con esos filtros en ninguna dimensión. Prueba con otra búsqueda.
        </p>
      )}
      {!cargando && !error && personajes.length > 0 && <CharacterList personajes={personajes} />}
    </section>
  );
}

export default Characters;
