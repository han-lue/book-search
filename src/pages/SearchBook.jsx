import React, { useRef, useEffect, useState } from 'react'
import BooksList from '../components/BooksList.jsx';

import coverImage from '../assets/book-cover-placeholder.png';


const SearchBook = () => {

  const {searchTerm, setSearchTerm} = useState('');
  const [books, setBooks] = React.useState([]);

/*
  const fetchBooks = async () => {
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
            const data = await response.json();
            console.log(data);
            const {docs} = data;

            const Books = docs.slice(0,100).map((book) => {
                
                const {cover_i, title, author_name, first_publish_year, key, ratings_average} = book;

                return {
                    id: key.replace('/works/', ''),
                    author: author_name,
                    rating: ratings_average,
                    cover: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : coverImage,
                    title: title, 
                    first_publish_year: first_publish_year,
                }
            });
            setBooks(Books);
        
        } catch (error) {
            console.log(error);
        }

    }
 */
  

  return (
        <div className='flex h-screen w-screen bg-black'>
            <div className='flex w-screen h-max items-center bg-white flex-col p-8 gap-10'>

                <div className='flex gap-2 justify-center items-center w-full relative'>

                    <input
                    className='bg-white p-2 pl-3 border border-red rounded-3xl text-black w-full active:outline-0 focus:outline-0'
                    type="text"
                    id="text"
                    name="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <svg className='flex items-center justify-center w-6 h-6 absolute end-3 bottom-2.5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>


            </div>
        </div>

  )
}
export default SearchBook