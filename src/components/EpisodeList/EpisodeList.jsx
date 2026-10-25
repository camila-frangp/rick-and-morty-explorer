import './EpisodeList.scss';

function EpisodeList({ episodios }) {
  return (
    <ul className="episode-list">
      {episodios.map((episodio) => (
        <li key={episodio.id} className="episode-list__item">
          <span className="episode-list__code">{episodio.episode}</span>
          <span className="episode-list__name">{episodio.name}</span>
          <span className="episode-list__date">{episodio.air_date}</span>
        </li>
      ))}
    </ul>
  );
}

export default EpisodeList;
