import { Link } from 'react-router-dom';
import StatusBadge from '../StatusBadge/StatusBadge';
import { traducirGenero, traducirLugar } from '../../utils/translations';
import './CharacterCard.scss';

function CharacterCard({ id, nombre, imagen, estado, especie, genero, ubicacion }) {
  return (
    <Link to={`/personajes/${id}`} className="character-card">
      <img className="character-card__image" src={imagen} alt={nombre} loading="lazy" />
      <div className="character-card__body">
        <h2 className="character-card__name">{nombre}</h2>
        <StatusBadge status={estado} />
        <dl className="character-card__info">
          <div>
            <dt>Especie</dt>
            <dd>{especie}</dd>
          </div>
          <div>
            <dt>Género</dt>
            <dd>{traducirGenero(genero)}</dd>
          </div>
          <div>
            <dt>Última ubicación</dt>
            <dd>{traducirLugar(ubicacion)}</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}

export default CharacterCard;
