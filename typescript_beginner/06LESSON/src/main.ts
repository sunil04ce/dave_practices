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
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {}

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Jack = new Coder("Jack", "Rock", 37);
console.log(Jack.getAge());
// console.log(Jack.age);
// console.log(Jack.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
  }

  public getLang() {
    return `${this.name} writes ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lufi", 20);
console.log(Sara.getLang());
console.log(Sara.name);
console.log(Sara.music);
// console.log(Sara.age);
// console.log(Sara.lang);

// ---------- interface ---------------
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  // name: string;
  // instrument: string;

  constructor(public name: string, public instrument: string) {}

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

// ---------- Static ---------------
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.id = ++Peeps.count;
  }
}

const James = new Peeps("James");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log("James.id - " + James.id);
console.log("Steve.id - " + Steve.id);
console.log("Amy.id - " + Amy.id);
console.log("Peeps.count -> " + Peeps.count);

// ---------- Getter, setter ---------------
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
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
