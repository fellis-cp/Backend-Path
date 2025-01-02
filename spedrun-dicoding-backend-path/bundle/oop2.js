"use strict";
class Smarthpone {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    charging() {
        console.log(`this ${this.model} is charging`);
    }
}
class Android extends Smarthpone {
    splitScreen() {
        console.log(`android have a split screen`);
    }
}
class Ios extends Smarthpone {
    airDrop() {
        console.log(`ios have a airdrop feature`);
    }
}
class Laptop extends Smarthpone {
    constructor(color, brand, model, screenSize) {
        super(color, brand, model);
        this.screenSize = screenSize;
    }
    fullSpec() {
        console.log(`laptop ini ber merk:${this.brand} , dengan ${this.model} warna:${this.color} , dengan ukuran layar${this.screenSize}`);
    }
}
const phone1 = new Ios("red", "IOS", "iphonex");
phone1.airDrop();
console.log(typeof phone1);
console.log(phone1);
const laptop1 = new Laptop("black", "lenovo", "tuf", 14);
laptop1.fullSpec();
console.log(typeof laptop1);
console.log(phone1);
