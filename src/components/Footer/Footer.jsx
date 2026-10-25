import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Datos obtenidos de{' '}
        <a href="https://rickandmortyapi.com" target="_blank" rel="noreferrer">
          The Rick and Morty API
        </a>
      </p>
      <p className="footer__small">Trabajo Práctico Final · Curso Inicial Front-End · UTN</p>
    </footer>
  );
}

export default Footer;
