import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'


const BookDetails = () => {

  let bookData = useLocation();
  const navigate = useNavigate();

  const [book, setBook] = useState({});
  const {id} = useParams();


  useEffect(() => {

    const fetchBook = async () => {
      try {
        const res = await fetch("https://openlibrary.org/works/" + id + ".json");
        const data = await res.json();

        const {description} = data;

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
    <div className='bg-neutral-200 h-full min-h-screen w-screen pt-4 px-4'>

      <svg onClick={() => navigate(-1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
      strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>

      <div className='text-black flex flex-col gap-2 pt-12 px-2 items-center'>

        <img src={book.cover} alt='cover' className='w-1/3 rounded-xl'/>

        <div className='flex flex-col w-full gap-4'>

          <p className='font-extrabold text-2xl text-center'>{book.title}</p>
          <p className='font-semibold text-xl text-center'>{book.author}</p>

          <div className='flex gap-4 items-center justify-center'>
            <p className='text-orange-700'>{book.rating} / 5</p>
            <p>Published: {book.first_published}</p>    
          </div>

          <p className='break-words line-clamp-[8]'>{book.description}</p>


      </div>

    </div>
  
    </div>
  )
}

export default BookDetails;