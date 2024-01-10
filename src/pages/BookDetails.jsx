import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'


const BookDetails = () => {

  let bookData = useLocation();

  const [book, setBook] = useState({});
  const {id} = useParams();

  useEffect(() => {

    const fetchBook = async () => {
      try {
        const res = await fetch("https://openlibrary.org/works/" + id + ".json");
        const data = await res.json();

        const {title, author, description} = data;

          const newBook = {
            description: description.value ? description.value : description ? description : "no description was found",
            title: bookData.state.bookData.title,
            author: bookData.state.bookData.author,
            rating: bookData.state.bookData.rating,
            first_published: bookData.state.bookData.first_published,
            cover: bookData.state.bookData.cover,
          }
          setBook(newBook);
          console.log(bookData);
          console.log(book);
      } catch (error){
        console.log(error)
      }
    }
      fetchBook();
    }, []);

  return (
    <div className='bg-neutral-200 h-screen w-screen text-black flex flex-col gap-2 pt-16 px-5 items-center'>

      
      <img src={book.cover} alt='cover' className='w-1/3'/>

      <div className='flex flex-col w-full text-center'>

        <p className='font-extrabold text-2xl'>{book.title}</p>
        <p className='font-semibold text-xl'>{book.author}</p>
        <p className='break-words'>{book.description}</p>
        <p>{book.first_published}</p>

        
        <p>{book.rating}</p>
      

      </div>
    
      
    
    </div>
  )
}

export default BookDetails;