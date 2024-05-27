// Array Destructing/ Destructuring

const arr = ["1", "2", "3", "4", "5"];
const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e);

//array destructing with function
function makeArray(num1, num2) {
  const arrayNew = [num1, num2];
  return arrayNew;
}

const [n1, n2] = makeArray(1, 2);

console.log(a, b);

// Object Destructing

const ahsan = {
  name: "ahsan",
  age: 20,
};

const { name: myName, age: myAge } = ahsan;

console.log(myName, myAge);
