import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/api';
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

  useEffect(() => {
    // Evita guardar la respuesta si el componente se desmontó antes de que llegue
    let ignorar = false;

    async function cargarPersonajes() {
      setCargando(true);
      setError(null);
      try {
        const data = await getCharacters();
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
  }, [intento]);

  return (
    <section className="characters">
      <header className="characters__header">
        <h1 className="characters__title">Personajes</h1>
        {!cargando && !error && <p className="characters__count">{total} personajes encontrados</p>}
      </header>

      {cargando && <Loader texto="Abriendo un portal..." />}
      {error && <ErrorMessage mensaje={error} onReintentar={() => setIntento(intento + 1)} />}
      {!cargando && !error && <CharacterList personajes={personajes} />}
    </section>
  );
}

export default Characters;
