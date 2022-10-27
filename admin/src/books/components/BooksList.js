import React from "react";
import BookItem from "./BookItem";
import './BooksList.css'
const BooksList=props=>{
if(props.items.length===0){
    return (
        <div className="center">
            <h2>No books found. </h2>
        </div>
    )
}
return <ul className="book-list">
    {props.items.map(book=>(
        <BookItem key={book.id}
        id={book.id}
        isbn={book.isbn}
        title={book.title}
        author={book.author}
        genre={book.genre}
        image={book.image}
        stock={book.stock}
        />))}
        
</ul>
}
export default BooksList