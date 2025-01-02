class Smarthpone {
  color: string;
  brand: string;
  model: string;

  constructor(color: string, brand: string, model: string) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging(): void {
    console.log(`this ${this.model} is charging`);
  }
}

class Android extends Smarthpone {
  splitScreen(): void {
    console.log(`android have a split screen`);
  }
}

class Ios extends Smarthpone {
  airDrop(): void {
    console.log(`ios have a airdrop feature`);
  }
}

class Laptop extends Smarthpone {
  screenSize: number;
  constructor(color: string, brand: string, model: string, screenSize: number) {
    super(color, brand, model);
    this.screenSize = screenSize;
  }
  fullSpec(): void {
    console.log(
      `laptop ini ber merk:${this.brand} , dengan ${this.model} warna:${this.color} , dengan ukuran layar${this.screenSize}`
    );
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
