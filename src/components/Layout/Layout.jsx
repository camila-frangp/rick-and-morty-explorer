import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.scss';

const opcionesMenu = [
  { nombre: 'Inicio', url: '/' },
  { nombre: 'Personajes', url: '/personajes' },
];

function Layout() {
  return (
    <div className="layout">
      <Navbar titulo="Rick and Morty Explorer" opciones={opcionesMenu} />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
