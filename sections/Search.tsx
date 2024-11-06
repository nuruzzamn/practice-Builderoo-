import React from "react";
import { useSearch, useOrder } from "builderoo";

const Search = () => {
  //   const {
  //     loading,
  //     results,
  //     filters,
  //     query,
  //     setQuery,
  //     searchAgain,
  //     toggleFilter,
  //   } = useSearch();

  //   setQuery("Medium");
  //   toggleFilter("Size", "variant", "Medium", true);
  //   searchAgain();

  //   console.log("loading data", loading);
  //   console.log("loading results", results.products[0].options);
  //   console.log("loading filters", filters);
  //   console.log("query data", query);

  //   console.log("loading filters", filters[0].choices[0]);

  //   console.log("loading toggleFilter", toggleFilter);

  const order = useOrder();

  console.log("order data", order);

  return (
    <div>
      <h4 className="text-center mt-20">From Search page</h4>
    </div>
  );
};

export default Search;
