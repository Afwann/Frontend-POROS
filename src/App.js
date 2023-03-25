import "./index.css";
import Navbar from './components/ANavbar/Navbar';
import HomePage from './components/CPembukaKedua/HomePage';
import AlternativeHome from './components/BPembuka/AlternativeHome';
import AddBook from './components/DTambahBuku/AddBook';
import { Element } from 'react-scroll';
import Footer from "./components/FFooter/Footer";
import { useState } from "react";
import DisplayBooks from "./components/EELibrary/DisplayBooks";
import CloseIt from "./components/Footer/CloseIt";


function App() {
  const [books, setBooks] = useState([]);


  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };


  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const [clock, setClock]= useState(false);

  return (
    <div className="App">
      <Navbar />
      <Element name="alternativeHome">
        <AlternativeHome />
      </Element>
      <Element name="homePage">
        <HomePage />
      </Element>
      <Element name="addBook">
        <AddBook onAddBook={addBook} setClock = {setClock} clock = {clock} />
      </Element>
      <Element name="CloseIt">
        <CloseIt />
      </Element>
      <Element name="Display">
        <DisplayBooks clock = {clock} />
      </Element>
      <Element name="Footer">
        <Footer />
      </Element>
    </div>
  );
}


export default App;