//Make JSON String from Object

const products = {
  name: "laptop",
  price: 50000,
  brand: "lenovo",
  color: "black",
};

const jsonFile = JSON.stringify(products);
console.log(jsonFile);

//fecth
/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

*/

//key and Value

const productKey = Object.keys(products);
const productValue = Object.values(products);
console.log(productKey, productValue);
