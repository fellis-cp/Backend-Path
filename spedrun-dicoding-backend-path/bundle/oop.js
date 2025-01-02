"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`${this.name} sedang berbicara`);
    }
}
const person1 = new Person("hanif", "anggara");
person1.talk();
console.log(typeof person1);
