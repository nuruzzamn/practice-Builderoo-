import React, { useState } from "react";
import { useProduct, useCartItemQuantity, useSelectedVariant } from "builderoo";
import classNames from "clsx";
import { log } from "console";

const ProductDetailsT: React.FC = () => {
  const product = useProduct();
  // const { variant, onSelectOption, isOptionSelected } = useSelectedVariant(product);

  // console.log("PRODUCTS DATA", product);

  const {
    variant,
    onSelectOption,
    isOptionSelected,
    preferredMedia,
    setPreferredMedia,
  } = useSelectedVariant(product);

  const { add } = useCartItemQuantity(product, variant);

  const [quantity, setQuantity] = useState<number>(1);

  console.log("variant data", variant);

  // console.log("quantity data", quantity);

  return (
    <>
      <div className="p-10">
        <div className="bg-white max-w-[75%] mx-auto overflow-hidden">
          <div className="container mx-auto px-4">
            <h1 className="text-center text-3xl font-bold mb-6">
              Product Details
            </h1>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Product Image Section */}
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[50%] object-cover"
                />
              </div>

              {/* Product Info Section */}
              <div className="flex flex-col p-5 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-3xl text-gray-800">
                  {product.title}
                </h3>
                <div className="font-bold text-xl text-gray-700 mt-2">
                  ${product.price}
                </div>

                <ul className="space-y-4 mt-4">
                  {product.options &&
                    product.options.length > 0 &&
                    product.options.map((option, i) => (
                      <li key={i}>
                        <div className="text-sm text-gray-600 mb-2">
                          {option.name}
                        </div>
                        <ul className="flex gap-3">
                          {option.values.map((value, j) => (
                            <li
                              onClick={() =>
                                onSelectOption(option._id, value._id)
                              }
                              key={j}
                              className={classNames(
                                "border border-gray-300 inline-block rounded-md px-4 py-2 text-sm cursor-pointer transition duration-200 ease-in-out",
                                {
                                  "bg-blue-600 text-white": isOptionSelected(
                                    option._id,
                                    value._id
                                  ),
                                  "bg-gray-100 text-gray-800":
                                    !isOptionSelected(option._id, value._id),
                                }
                              )}
                            >
                              {value.label}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                </ul>

                <div className="mt-6 mb-4 flex items-center gap-4">
                  <button
                    onClick={() => {
                      console.log("add to cart click");
                      add(quantity);
                    }}
                    disabled={variant == null}
                    className="bg-blue-600 text-white py-2 px-6 rounded-md shadow hover:bg-blue-700 transition duration-200 ease-in-out"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </section>

            {/* Product Description Section */}
            <section className="mt-10 px-4 text-gray-600 text-lg">
              <h4 className="font-semibold text-xl mb-2">Description</h4>
              <p>{product.description}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsT;
