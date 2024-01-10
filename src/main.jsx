import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'

import About from './pages/About.jsx'
import BookDetails from './pages/BookDetails.jsx'
import SearchBook from './pages/SearchBook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<BookDetails />} />      
      </Routes>
    </BrowserRouter>
)
