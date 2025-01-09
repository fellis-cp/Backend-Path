/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Tulis kode di bawah ini
class Animal {
  name: string;
  age: number;
  isMamal: boolean;

  constructor(name: string, age: number, isMamal: boolean) {
    this.name = name;
    this.age = age;
    this.isMamal = isMamal;
  }
}

class Rabbit extends Animal {
  constructor(name: string, age: number) {
    super(name, age, true);
  }
  eat(): string {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name: string, age: number) {
    super(name, age, false);
  }
  fly(): string {
    return `${this.name} sedang terbang!`;
  }
}

// Instance dari Rabbit
const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.eat()); // Output: Labi sedang makan!

// Instance dari Eagle
const myEagle = new Eagle("Elo", 4);
console.log(myEagle.fly()); // Output: Elo sedang terbang!
