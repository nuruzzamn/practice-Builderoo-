import React, { useState } from "react";
import { useSearch, useOrder } from "builderoo";

const Search = () => {
  const {
    loading,
    results,
    filters,
    query,
    setQuery,
    searchAgain,
    toggleFilter,
  } = useSearch();

  const [inputValue, setInputValue] = useState("");
  //   console.log("loading data", loading);
  // console.log("loading results", results.products[0].options);
  //   console.log("loading filters", filters);
  //   console.log("query data", query);

  // console.log("loading filters", filters[0].choices[0]);

  // console.log("loading toggleFilter", toggleFilter);

  // const order = useOrder();

  // console.log("order data", order);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setQuery(inputValue);
    toggleFilter("Size", "variant", "Medium");
    searchAgain();

    setInputValue(""); // Clear the input field
  };

  // console.log("Input Value:", query); // Log input value

  return (
    <div className="text-center ">
      <h4 className=" mt-20">From Search page</h4>

      <div className="my-4">
        <label htmlFor="textInput" className="text-gray-700  mx-2">
          Enter Text:
        </label>
        <input
          type="text"
          id="textInput"
          value={inputValue}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 mt-1  mx-2"
          placeholder="Type something here..."
        />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-1"
        >
          Submit
        </button>
        <p className="mt-4">You typed: {query}</p>
      </div>
    </div>
  );
};

export default Search;
