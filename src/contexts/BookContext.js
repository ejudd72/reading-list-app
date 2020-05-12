import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

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

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
