// export default [
//   {
//     _id: "1",
//     title: "T-Shirt Summer Vibes",
//     image: "https://picsum.photos/200/320",
//     price: 200,
//     description:
//       "this a very famous products in our store. you can try for a one. hope your experience will be excellent",
//     route: "/products1",
//     variant: [{ _id: "2" }],
//     values: [{ _id: "1", label: "red", value: "10" }],
//     options: [
//       {
//         name: "product 1",
//         type: "A grade",
//         values: [{ label: "option 1", value: "200" }],
//       },
//     ],
//   },
// ];

export default [
  {
    _id: "1",
    title: "T-Shirt Summer Vibes",
    image:
      "https://c.bonfireassets.com/static/design-template-category/2bc4acde-eaed-4b9b-ae95-ea566241e26b/design-template/a16600d7-5180-4597-bb23-783db9814407/f5fe2afa628f4140b4e3f725e0cd8aef/aUENsZcgKA.jpg",
    price: 200,
    description:
      "Embrace the warmth of summer with our 'T-Shirt Summer Vibes.' Crafted from lightweight, breathable fabric, this T-shirt ensures maximum comfort on hot days. Its stylish design makes it perfect for casual outings, beach days, or lounging at home. Available in vibrant colors, this shirt is not just a piece of clothing; it’s a statement of summer fun and relaxation. Don’t miss out on adding this essential item to your wardrobe!",
    route: "/products1",
    variants: [
      {
        _id: "1",
        name: "Red / Medium",
        price: 10,
        values: ["abc1", "abc3"],
      },
    ],
    options: [
      {
        _id: "1",
        name: "Size",
        type: "text",
        values: [
          { _id: "abc1", label: "Medium" },
          { _id: "abc2", label: "Large" },
        ],
      },
      {
        name: "Color",
        type: "text",
        values: [
          { _id: "abc3", label: "Red", value: "abc3" },
          { _id: "abc4", label: "Green", value: "abc4" },
        ],
      },
    ],
  },
];
