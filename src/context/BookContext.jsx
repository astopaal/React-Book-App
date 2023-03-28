import { createContext, useEffect, useState, useContext } from "react";
import getBookData from "../api/apihelper.js";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBookData(searchText);
      setBookData(data);
      console.log(data)
    };

    fetchBooks()
    
  }, [searchText]);

  const values = {
    bookData,
    setSearchText,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};


export const useBook = () => useContext(BookContext)
