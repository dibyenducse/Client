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

// class Person {
//     constructor(name, age) {
//         this.name = name; //class property
//         this.age = age;
//     }
//     eat() { //method
//         console.log(`${this.name} is eating`);
//     }
// }

// class Cricketer extends Person {
//     constructor(name, age, type, country) {
//         super(name, age);
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }
//     play() {
//         console.log(`${this.name} is playing`);
//     }
// }
// const sakib = new Cricketer('sakib', 29, 'All rounder', 'Bangladeshi');
// sakib.eat();

class Person {
    constructor(name, age) {
        this.name = name; //class property
        this.age = age;
    }
    eat() {
        //method
        console.log(`${this.name} is eating`);
    }

    get setName() {
        //getter
        return this.name;
    }

    set metName(name) {
        //setter
        this.name = name;
    }

    static isEqualAge(fstage, scndage) {
        //static //static 'This' refer to direct Object
        return fstage.age === scndage.age;
    }
}
let sakib = new Person('Sakib', 39);
let tamim = new Person('Tamim', 39);

//sakib.metName = 'Tamim';

console.log(Person.isEqualAge(sakib, tamim));

//Polymorphism
//if Child class changed Parent property or method
