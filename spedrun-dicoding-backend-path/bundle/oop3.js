"use strict";
class mesinKopi {
    constructor(volume, temp = 90) {
        this.volume = volume;
        this.temp = temp;
    }
    set temperatur(temp) {
        console.log("kamu tidak bisa merubah temperatur di mesin kopi");
    }
}
class mesinTeh extends mesinKopi {
    constructor(volume, temp, tipeTeh) {
        super(volume, temp);
        this.tipeTeh = tipeTeh;
    }
    set temperatur(temp) {
        this.temp = temp;
    }
}
const kopi = new mesinKopi(100, 100);
kopi.temperatur = 90;
console.log(kopi);
