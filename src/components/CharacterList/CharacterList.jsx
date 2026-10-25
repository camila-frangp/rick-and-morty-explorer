import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.scss';

function CharacterList({ personajes }) {
  return (
    <ul className="character-list">
      {personajes.map((personaje) => (
        <li key={personaje.id}>
          <CharacterCard
            nombre={personaje.name}
            imagen={personaje.image}
            estado={personaje.status}
            especie={personaje.species}
            genero={personaje.gender}
            ubicacion={personaje.location.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
