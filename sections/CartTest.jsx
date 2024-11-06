import React, { useState } from "react";
import { useProduct, useCartItemQuantity, useSelectedVariant } from "builderoo";
import classNames from "clsx";

const CartTest = () => {
  const product = useProduct();
  console.log("products", product);

  return <div>CartTest</div>;
};

export default CartTest;
