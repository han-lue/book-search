import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Book = (book) => {

  return (
    <Link to={"/book/" + book.id} state={{bookData: book}}>
        <div className='flex items-center justify-center'>
                <div className='flex gap-5'>
                    <img className='w-1/3 rounded-2xl' src={book.cover} alt='cover'></img>

                    <div className='flex flex-col p-2'>
                    <p className='text-black font-extrabold text-xl'>{book.title}</p>
                    <p className='text-black'>{book.author}</p>
                    <p className='text-black'>{book.rating}</p>
                    <p className='text-black'>{book.first_published}</p>
                    </div>
                    
                </div>
        </div>
    </Link>
  )
}

export default Book