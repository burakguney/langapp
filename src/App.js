import { Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Game from "./components/Game";
import Categories from "./components/Categories";
import WordList from "./components/word/WordList";
import AddWord from "./components/word/AddWord";
import EditWord from "./components/word/EditWord";
import CategoryList from "./components/category/CategoryList";
import AddCategory from "./components/category/AddCategory";
import EditCategory from "./components/category/EditCategory";

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

          <Route path="/categoryList" element={<CategoryList />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/editCategory/:id" element={<EditCategory />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
