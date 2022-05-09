import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Books from './components/Books';
import AddBook from './components/NewBook';
import Contact from './components/Contact';
import Update from './components/Update';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Books /> }></Route>
        <Route path="/new" element={ <AddBook /> }></Route>
        <Route path="/contact" element={ <Contact /> }></Route>
        <Route path="/update/:id" element={ <Update /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
