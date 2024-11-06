import React, { useState } from "react";
import { useCart, useCartItemQuantity } from "builderoo";

const Cart: React.FC = () => {
  const { items } = useCart();

  console.log("Cart items", items[0]);

  // console.log("useCartItemQuantity data", useCartItemQuantity);

  // const { add, remove, set, count } = useCartItemQuantity(
  //   items[0].product._id,
  //   items[0].variant._id
  // );

  // set(3);

  // add(1);

  // console.log("item data ", items);

  return <div>Cart</div>;
};

export default Cart;
