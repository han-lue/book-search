import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Book = (book) => {

  return (
    <Link to={"/book/" + book.id} state={{bookData: book}}>
        <div className='flex items-center bg-neutral-100 px-3 py-2 rounded-xl'>
                <div className='flex gap-6 w-full'>
                    <img className='w-1/5 aspect-[2/3] rounded-xl' src={book.cover} alt='cover'></img>

                    <div className='flex flex-col justify-between w-full py-1 pr-1'>
                        <p className='text-black font-extrabold text-l'>{book.title}</p>
                        
                        <div className='flex justify-between'>
                            <p className='text-black'>{book.author}</p>
                            <p className='text-orange-500'>{book.rating}</p>

                        </div>
                      
                    </div>
                    
                </div>
        </div>
    </Link>
  )
}

export default Book