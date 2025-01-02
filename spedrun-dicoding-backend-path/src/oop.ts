class Person {
  name: string;
  age: string;

  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }

  talk(): void {
    console.log(`${this.name} sedang berbicara`);
  }
}

const person1 = new Person("hanif", "anggara");
person1.talk();

console.log(typeof person1);
