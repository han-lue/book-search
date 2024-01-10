import React from 'react'
import Book from '../components/Book.jsx';



const  BooksList = ({books}) => {

  return (

    <div className='grid grid-cols-1 gap-10'>
          {
          books.map((book, index) => {
            return (
              <Book key={index} {...book} />
            )

          })
          }
        </div>
  )


}

export default BooksList

