import React from "react";
import BooksList from '../components/BooksList'

const Books = () => {
  const BOOKS = [
    {
      isbn: "15468564",
      title: "Keshjella",
      author: "Kadare",
      genre: "Drama",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Keshtjella-ismail-kadare.jpg",
      stock: "10",
    },
  ];
  return <BooksList items={BOOKS} />;
};

export default Books;
