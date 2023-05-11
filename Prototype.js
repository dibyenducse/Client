//How Class work inner Javascript
//This connection called Protype inheritance
// function Person(name, age) {
//     //Parent Class
//     this.name = name;
//     this.age = age;
// }

// function Cricketer(name, age, type, country) {
//     //sub class
//     Person.call(this); //Connecting with parent property
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }

// Person.prototype = {
//     eat: function () {
//         console.log(`${this.name} is eating`);
//     },
// };

// Cricketer.prototype = Object.create(Person.prototype); //connecting with parent's prototype
// Cricketer.prototype.constrructor = Cricketer;
// Cricketer.prototype.play = function () {
//     console.log(`${this.name} is playing`);
// };

// const sakib = new Cricketer('sakib', 29, 'All rounder', 'Bangladeshi');
// sakib.eat();

//convert into Class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Cricketer extends Person {
    constructor(name, age, type, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}
const sakib = new Cricketer('sakib', 29, 'All rounder', 'Bangladeshi');
sakib.eat();
