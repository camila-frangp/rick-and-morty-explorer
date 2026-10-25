import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Characters />} />
      </Route>
    </Routes>
  );
}

export default App;
