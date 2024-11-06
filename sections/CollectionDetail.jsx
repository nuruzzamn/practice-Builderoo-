import React from "react";
import { useCollection, usePagination, Prop } from "builderoo";

// export const props = {
//   collection: Prop.collection().label("Featured Collection"),
// };

const CollectionDetail = () => {
  //   const collection = useCollection();
  const collection = useCollection();

  console.log("collection", collection[0].products[0].quantity);
  //   const { currentPage, gotoPage, totalPages, urlForPage } = usePagination();
  return (
    <>
      <h1>Here is the collection value</h1>
    </>
    // <section className="px-20 py-10 my-10">
    //   <div className="mt-20 flex justify-center gap-8">
    //     <a
    //       className="cursor-pointer underline text-blue-500"
    //       href={urlForPage(currentPage - 1)}
    //       onClick={(e) => gotoPage(currentPage - 1, e)}
    //     >
    //       Previous Page
    //     </a>
    //     <a
    //       href={urlForPage(currentPage + 1)}
    //       className="cursor-pointer underline text-blue-500"
    //       onClick={(e) => gotoPage(currentPage + 1, e)}
    //     >
    //       Next Page
    //     </a>
    //   </div>
    // </section>
  );
};

export default CollectionDetail;
