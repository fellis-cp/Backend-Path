class mesinKopi {
  protected temp: number;
  volume: number;
  constructor(volume: number, temp: number = 90) {
    this.volume = volume;
    this.temp = temp;
  }

  set temperatur(temp: number) {
    console.log("kamu tidak bisa merubah temperatur di mesin kopi");
  }
}

class mesinTeh extends mesinKopi {
  tipeTeh: string;
  constructor(volume: number, temp: number, tipeTeh: string) {
    super(volume, temp);
    this.tipeTeh = tipeTeh;
  }

  set temperatur(temp: number) {
    this.temp = temp;
  }
}

const kopi = new mesinKopi(100, 100);
kopi.temperatur = 90;
console.log(kopi);
