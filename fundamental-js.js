//1.  varriable declaration

let ahsan = "ahsan";
console.log(ahsan);
ahsan = "jun";
console.log(ahsan);

const name = "ahsan";
console.log(name);

// name = "jun";
console.log(name);

// 2 Condition

if (ahsan == "ahsan") {
  console.log("true");
}

//3 for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//4 while loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//5 do while loop

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

//6 function
function myfunction() {
  console.log("ahsan");
}

myfunction();

//7 array

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr1);

arr1.push(11);

console.log(arr1);

arr1.pop();

console.log(arr1);

arr1.unshift(0);

console.log(arr1);

arr1.shift();

console.log(arr1);

arr1.splice(0, 1);

console.log(arr1);

arr1.slice(1, 1);

console.log(arr1);

arr1.reverse();

console.log(arr1);

arr1.sort();

console.log(arr1);

arr1.sort(function (a, b) {
  return a - b;
});

console.log(arr1);

arr1.sort(function (a, b) {
  return b - a;
});

console.log(arr1);

//8 object

const obj = {
  name: "ahsan",
  age: 20,
};

console.log(obj);

obj.name = "jun";

console.log(obj);

//9 class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("ahsan", 20);

console.log(person);

//10 module

//11 exception

//12 nullish coalescing operator

//13 optional chaining

//14 spread operator

//15 rest operator
