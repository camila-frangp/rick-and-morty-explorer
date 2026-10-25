import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Characters />} />
        <Route path="/personajes/:id" element={<CharacterDetail />} />
        {/* Cualquier ruta que no coincida con las anteriores */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
