import React from 'react'
import { Link } from 'react-router-dom'

const BookItem = (props) => {
  return (
    <li className='book-item'>
        <div className='book-item__content'>
          <Link to={`/${props.id}/books`}>
            <div className='book-item__image'>
                <img src={props.image} alt ={props.name}/>
            </div>
            <div className='book-item__info'>
                <h2>{props.title}</h2>
<h3>{props.author}</h3>
            </div></Link>
             </div>
         </li>
  )
}

export default BookItem