//1. template string

const ahsan = {
  name: "ahsan",
  age: 20,
  add: ["sherpur", "karachi"],
};

const res = `my name is ${ahsan.name} and my age is ${ahsan.age}`;
console.log(res);

//2. destructuring

const { name, age: year } = ahsan;
console.log(name, year);

//3. spread operator

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(...arr);

const arr2 = [...arr, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(arr2);

//4. rest operator

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [a, ...b] = arr3;

console.log(a, b);

//5. Arrow function

const myFunction = () => console.log("ahsan");
myFunction();

const myFunction2 = (a, b) => a + b;
console.log(myFunction2(1, 2));

const myFunction3 = (a, b) => {
  return a + b;
};
console.log(myFunction3(1, 2));

//6. class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const ahsanAlBashar = new Person("ahsan", 20);

console.log(ahsanAlBashar);

//9.Inheritance

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

const teacher = new Teacher("ahsan", 20, "maths");
console.log(teacher);
