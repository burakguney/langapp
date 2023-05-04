import { Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Game from "./components/Game";
import Levels from "./components/Levels";
import Word from "./components/Word";
import Login from "./components/Login";


function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/words" element={<Word />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div>


  );
}

export default App;
