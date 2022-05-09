import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Books from './components/Books';
import AddBook from './components/NewBook';
import Contact from './components/Contact';
import Update from './components/Update';

function App() {
  const [books, setBooks] = useState([]);

  const removeObj = BookId => {
    setBooks(books.filter(reads => reads._id != BookId)); 
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/books")
    .then((bookData) => {
        setBooks(bookData.data.books);
        console.log(bookData.data.books);
    })
    .catch((err) => console.log(err))
}, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Books removeObj={removeObj} books={books}/> }></Route>
        <Route path="/new" element={ <AddBook books={books} setBooks={setBooks}/> }></Route>
        <Route path="/contact" element={ <Contact /> }></Route>
        <Route path="/update/:id" element={ <Update /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
