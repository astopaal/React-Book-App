import React, { useState } from "react";
import { useBook } from "../../context/BookContext";

const SearchInput = () => {
  const { setSearchText } = useBook(); //useBook hook from BookContext
  //use this hook for reach to searchtext and bookdata
  const [tempText, setTempText] = useState("");
  const handleChange = (e) => {
    let text = e.target.value;
    setTempText(text);
  };

  const handleClick = () => {
    setSearchText(tempText);
  };



  return (
    <div className="text-white">
      <h1 className="text-5xl font-extralight">Book Search Using React</h1>
      <input
        onChange={handleChange}
        className="p-4 border-2 border-white min-w-[250px] rounded-lg mb-10 text-white bg-transparent hover:scale-105 transition duration-1000"
        type="text"
        placeholder="Enter a book or author name..."
      />
      
      <button
        onClick={handleClick}
        class="rounded-md btn2 ml-10 mt-12 px-10 text-white py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-pink-700"
        type="button"
      >
        <span class="absolute inset-0 bg-white"></span>
        <span class="absolute inset-0 flex justify-center items-center font-bold">
          {" "}
          SEARCH
        </span>
        SEARCH
      </button>
    </div>
  );
};

export default SearchInput;
