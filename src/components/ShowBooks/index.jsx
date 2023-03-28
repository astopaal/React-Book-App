import React from "react";
import { useBook } from "../../context/BookContext";
import BookCard from "../BookCard";


//show books component
const ShowBooks = () => {
  const { bookData } = useBook();
  const nineItemsOfBookData = bookData?.items?.slice(0,9)

  return (
    <div className="flex flex-row flex-wrap max-w-[50%] justify-center items-center">
      {bookData.items &&
      //renders a book card component for each item in book data
        nineItemsOfBookData.map((item, i) => (
          <BookCard
            bookData = {item}
            key={i}
            name={item.volumeInfo.title}
            img={item.volumeInfo?.imageLinks?.thumbnail}
          />
        ))}
    </div>
  );
};

export default ShowBooks;
