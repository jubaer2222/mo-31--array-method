const person = {
  name: "Jubaer",
  greet() {
    console.log(this.name);
  }
};
person.greet(); // "Jubaer"


const user = {
  name: "Jubaer",
  sayHello: function () {
    console.log("Hello " + this.name);
  }
};

user.sayHello(); // Hello Jubaer
