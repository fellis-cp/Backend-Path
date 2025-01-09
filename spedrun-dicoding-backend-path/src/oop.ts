class Person {
  name: string;
  age?: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  talk(): void {
    console.log(`${this.name} sedang berbicara`);
  }
}
