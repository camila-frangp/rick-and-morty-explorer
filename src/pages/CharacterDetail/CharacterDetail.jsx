import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCharacterById, getEpisodesByUrls } from '../../services/api';
import StatusBadge from '../../components/StatusBadge/StatusBadge';
import EpisodeList from '../../components/EpisodeList/EpisodeList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { traducirGenero, traducirLugar } from '../../utils/translations';
import './CharacterDetail.scss';

function CharacterDetail() {
  // Lee el id desde la URL: /personajes/:id
  const { id } = useParams();

  const [personaje, setPersonaje] = useState(null);
  const [episodios, setEpisodios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    let ignorar = false;

    async function cargarDetalle() {
      setCargando(true);
      setError(null);
      try {
        const dataPersonaje = await getCharacterById(id);
        // Los episodios vienen como URLs dentro del personaje: se piden todos en una sola llamada
        const dataEpisodios = await getEpisodesByUrls(dataPersonaje.episode);
        if (!ignorar) {
          setPersonaje(dataPersonaje);
          setEpisodios(dataEpisodios);
        }
      } catch (err) {
        if (!ignorar) setError(err.message);
      } finally {
        if (!ignorar) setCargando(false);
      }
    }

    cargarDetalle();

    return () => {
      ignorar = true;
    };
  }, [id, intento]);

  return (
    <section className="character-detail">
      <Link to="/personajes" className="character-detail__back">
        ← Volver a personajes
      </Link>

      {cargando && <Loader texto="Viajando a otra dimensión..." />}
      {error && <ErrorMessage mensaje={error} onReintentar={() => setIntento(intento + 1)} />}

      {!cargando && !error && personaje && (
        <>
          <article className="character-detail__card">
            <img className="character-detail__image" src={personaje.image} alt={personaje.name} />

            <div className="character-detail__body">
              <h1 className="character-detail__name">{personaje.name}</h1>
              <StatusBadge status={personaje.status} />

              <dl className="character-detail__info">
                <div>
                  <dt>Especie</dt>
                  <dd>{personaje.species}</dd>
                </div>
                <div>
                  <dt>Tipo</dt>
                  <dd>{personaje.type || 'Sin especificar'}</dd>
                </div>
                <div>
                  <dt>Género</dt>
                  <dd>{traducirGenero(personaje.gender)}</dd>
                </div>
                <div>
                  <dt>Origen</dt>
                  <dd>{traducirLugar(personaje.origin.name)}</dd>
                </div>
                <div>
                  <dt>Última ubicación</dt>
                  <dd>{traducirLugar(personaje.location.name)}</dd>
                </div>
                <div>
                  <dt>Episodios</dt>
                  <dd>{personaje.episode.length}</dd>
                </div>
              </dl>
            </div>
          </article>

          <h2 className="character-detail__subtitle">Aparece en</h2>
          <EpisodeList episodios={episodios} />
        </>
      )}
    </section>
  );
}

export default CharacterDetail;
