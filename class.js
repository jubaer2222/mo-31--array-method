/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}


const person1 = new Person("Jubaer", 25);
person1.greet(); // Output: Hi, my name is Jubaer and I am 25 years old.


class Student extends Person {
  constructor(name, age, id) {
    super(name, age); // parent class এর constructor call
    this.id = id;
  }

  showID() {
    console.log(`My ID is ${this.id}`);
  }
}

const s1 = new Student("Arafat", 20, "12345");
s1.greet();     // Parent method
s1.showID();    // Child method

*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// class থেকে object বানানো
const person1 = new Person("Jubaer", 22);
person1.greet(); // Hello, my name is Jubaer and I am 22 years old.
