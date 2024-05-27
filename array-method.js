const products = [
  { name: "laptop", price: 1000, brand: "lenovo" },
  { name: "mobile", price: 2000, brand: "samsung" },
  { name: "tv", price: 3000, brand: "samsung" },
  { name: "watch", price: 4000, brand: "sony" },
  { name: "camera", price: 5000, brand: "canon" },
];

//1.map

const brands = products.map((product) => product.brand);
console.log(brands);

// 2. forEach

products.forEach((product) => console.log(product.price));

// 3. filter
const expensive = products.filter((product) => product.price > 3000);
console.log(expensive);

const selectedProduct = products.filter(
  (product) => product.brand === "samsung"
);
console.log(selectedProduct);

const nProducts = products.filter((product) => product.brand.includes("s"));
console.log(nProducts);
// 4. find

const brand = products.find((product) => product.brand === "samsung");
console.log(brand);
