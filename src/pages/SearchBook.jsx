import React, { useRef, useEffect, useState } from 'react'
import BooksList from '../components/BooksList.jsx';

import coverImage from '../assets/book-cover-placeholder.png';


const SearchBook = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(()=> {
    const prevBooks = window.sessionStorage.getItem('books');

    if(prevBooks) {
        setBooks(JSON.parse(prevBooks));
    }

  }, [])


  const fetchBooks = async () => {
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
            const data = await response.json();
            console.log(data);
            const {docs} = data;

            const books = docs.slice(0,100).map((book) => {
                
                const {cover_i, title, author_name, first_publish_year, key, ratings_average} = book;


                return {
                    id: key.replace('/works/', ''),
                    title: title, 
                    author: author_name ? author_name[0] : "author not found",
                    rating: ratings_average ? Math.round(ratings_average * 10) / 10 : 0,
                    cover: cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : coverImage,
                    first_published: first_publish_year ? first_publish_year : "publish year not found",
                }
            });

            setBooks(books);
            window.sessionStorage.setItem('books', JSON.stringify(books));
            
        } catch (error) {
            console.log(error);
        }

    }

  

  return (
        <div className='flex h-full min-h-screen w-screen bg-neutral-200'>
            <div className='flex w-screen h-max items-center flex-col py-8 px-5 gap-10'>

            <p className='font-bold text-3xl'>Search a book</p>

                <div className='flex gap-2 justify-center items-center w-full relative'>

                    <input
                    className='bg-neutral-200 p-2 pl-3 border border-black rounded-3xl text-black w-full focus:outline-0'
                    type="text"
                    id="text"
                    name="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <svg className='flex items-center justify-center w-6 h-6 absolute end-3 bottom-2.5' onClick={fetchBooks} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>

                <BooksList books={books}/>

            </div>
        </div>

  )
}
export default SearchBook