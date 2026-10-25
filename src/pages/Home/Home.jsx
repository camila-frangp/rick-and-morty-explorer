import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <section className="home">
      <h1 className="home__title">Explora el multiverso de Rick and Morty</h1>
      <p className="home__text">
        Busca personajes, filtra por estado o género y descubre en qué episodios aparece cada uno.
      </p>
      <Link to="/personajes" className="home__button">
        Ver personajes
      </Link>
    </section>
  );
}

export default Home;
