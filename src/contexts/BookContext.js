import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "The Penelopiad", author: "Margaret Atwood", id: uuid() },
    { title: "Girl meets Boy", author: "Ali Smith", id: uuid() },
    { title: "The Green Mile", author: "Stephen King", id: uuid() },
    {
      title: "One Thousand Years of Solitude",
      author: "Gabriel Garcia Marquez",
      id: uuid()
    }
  ]);
  const addBook = (title, author) => {
    setBooks([...books], { title, author, id: uuid() });
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
};

export default BookContext;
