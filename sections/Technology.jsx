import { Prop, Link, useProps } from "builderoo";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export const props = {
  collection: Prop.collection().label("Featured Technology"),
};

const Technology = () => {
  const { collection } = useProps();

  console.log("Technology", collection);

  const [currentPage, setCurrentPage] = useState(0);

  // Number of news articles per page
  const articlesPerPage = 6;

  // Calculate the displayed articles for the current page
  const currentArticles = collection.slice(
    currentPage * articlesPerPage,
    (currentPage + 1) * articlesPerPage
  );

  // Handle page click
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="mx-auto flex justify-center items-center w-fit">
      <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-center">
          <section className="lg:full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArticles.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-28 object-cover"
                />
                <div className="p-2">
                  <h3
                    id={item.title.toLowerCase().replace(/ /g, "-")}
                    className="text-lg font-bold text-gray-800 mb-1"
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-1">{item.description}</p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </section>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={Math.ceil(collection.length / articlesPerPage)}
              onPageChange={handlePageClick}
              containerClassName={"pagination flex"}
              previousLinkClassName={"mr-2 text-blue-600 hover:underline"}
              nextLinkClassName={"ml-2 text-blue-600 hover:underline"}
              disabledClassName={"text-gray-500"}
              activeClassName={"font-bold text-blue-600"}
              pageClassName={"mx-1"}
              pageLinkClassName={"text-blue-600 hover:underline"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
