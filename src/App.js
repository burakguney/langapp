import { Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Game from "./components/Game";
import Categories from "./components/Categories";
import WordList from "./components/WordList";
import AddWord from "./components/AddWord";
import EditWord from "./components/EditWord";


function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/category/:categoryName" element={<Game />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/wordList" element={<WordList />} />
          <Route path="/addWord" element={<AddWord />} />
          <Route path="/editWord/:id" element={<EditWord />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
