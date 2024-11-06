import products from "./products";
// console.log("cart js", products);

export default {
  items: products.map((p) => {
    return { product: p, quantity: 1, variant: p.variants[0] };
  }),
};
