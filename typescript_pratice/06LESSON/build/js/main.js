"use strict";
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Jack = new Coder("Jack", "Rock", 37);
console.log(Jack.getAge());
// console.log(Jack.age);
// console.log(Jack.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `${this.name} writes ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lufi", 20);
console.log(Sara.getLang());
console.log(Sara.name);
console.log(Sara.music);
class Guitarist {
    // name: string;
    // instrument: string;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
// ---------- Static ---------------
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const James = new Peeps("James");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log("James.id - " + James.id);
console.log("Steve.id - " + Steve.id);
console.log("Amy.id - " + Amy.id);
console.log("Peeps.count -> " + Peeps.count);
// ---------- Getter, setter ---------------
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Param is not an array of strings");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data = ["Van Alan", 5051];
