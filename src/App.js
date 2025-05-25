

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Section from './pages/Section';
import State from './pages/State';
import Effect from './pages/Effect';
import LightToggle from './pages/ParentChild';
import Form from './pages/Form';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Section" element={<Section />}  />
        <Route path="/State" element={<State />} />
        <Route path="/Effect" element={<Effect />} />
        <Route path="/LightToggle" element={<LightToggle />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
