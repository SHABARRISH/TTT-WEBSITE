import { Routes, Route } from 'react-router-dom';
import Ahalya from './pages/ahalya';
import Balaji from './pages/balaji';
import Minojini from './pages/minojini';
import Naveenkumar from './pages/naveenkumaran';
import Shapna from './pages/shapna';
import Vinothkumar from './pages/vinothkumar';
import Varshini from './pages/varshini';
import Shekkina from './pages/shekkina';
import RubiPreethi from './pages/rubipreethi'; // Import the RubiPreethi page
import EducationalPlatform from './main';
import { Import } from 'lucide-react';
function App() {
  return (
    <Routes>
      <Route path="/" element={<EducationalPlatform />} />
      <Route path="/rubypreethi" element={<RubiPreethi />} />
      <Route path="/balaji" element={<Balaji/>} />
      <Route path="/minojini" element={<Minojini/>} />
      <Route path="/naveenkumaran" element={<Naveenkumar/>} />
      <Route path="/shapna" element={<Shapna/>} />
      <Route path="/shekkina" element={<Shekkina/>} />
      <Route path="/vinoth" element={<Vinothkumar/>} />
      <Route path="/varshini" element={<Varshini/>} />
      <Route path="/ahalya" element={<Ahalya/>} />
    </Routes>
  );
}

export default App;
