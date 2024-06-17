import { Character } from "./types";

console.log("laughter thingy");

let firstName = "whitney";

let lifespan: number | "ongoing" | "certain";

let specAda: string;

type id = number;
specAda = "enii";

let james: id;

james = 2285643479;

type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  author: Author;
  title: string;
  pages?: number;
};

let harryPotter: Book = {
  author: {
    firstName: "J.K",
    lastName: "Rowling"
  },
  title: "Harry Potter"
};

let percyJackson: Book = {
  author: {
    firstName: "Rick",
    lastName: "Riordan"
  },
  title: "Percy Jackson and The Olympians",
  pages: 5000
};

console.log(specAda);

type poemWithPages = {
  writer: string;
  title: string;
  pages: number;
};

type poemWithRhymes = {
  writer: string;
  title: string;
  rhymes: boolean;
};

type poem = poemWithPages | poemWithRhymes;

let hamlet: poem =
  Math.random() > 0.5
    ? { writer: "William Shakespeare", title: "Hamlet", pages: 1 }
    : { writer: "William Shakespeare", title: "Hamlet", rhymes: true };

if ("pages" in hamlet) {
  console.log(hamlet.pages);
} else {
  console.log(hamlet.rhymes);
}

type car = { name: string; year: number };
type carWithValue = car & { valuable: boolean };

let toyotaCamry: car = {
  name: "Toyata Camry le",
  year: 2002
};

let toyotaCamryWithValue: carWithValue = {
  name: "Toyata Camry le",
  year: 2002,
  valuable: false
};

//must take in one parameter of type string
const sing = (song: string) => {
  console.log(`singing${song}`);
};

//must take in 2 parameters of type string
const sing2songs = (song1: string, song2: string) => {
  console.log(`singing${song1} ${song2}`);
};

//must take in song1, song2 isn't compulsory
const sing1or2songs = (song1: string, song2?: string) => {
  console.log(`singing${song1} ${song2 && "and song 2"}`);
};

const sing1or2or3songs = (
  song1: string,
  song2?: string,
  song3?: string
) => {
  console.log(`singing${song1}`);
  if (song2) console.log(`singing ${song2}`);
  if (song3) console.log(`singing ${song3}`);
};

type user = {
  name: string;
  email: string;
  objectId: string;
  number: number;
};

//accepted
const hakeem: user = {
  name: "Hakeem Olajuwon",
  email: "hakeem@gmail.com",
  objectId: "kfknj34rw4tk4kn",
  number: 844844484
};

const rateNames = (name: string, rating = 0) => {
  console.log(`${name} is rated ${rating}`);
};

rateNames("rachel");
rateNames("eniitan", 5);

const moviesFromADirector = (director: string, ...movies: string[]) => {
  for (const movie of movies) {
    console.log(`${movie} by ${director}`);
  }
};

moviesFromADirector(
  "F.F Copolla",
  "Metropolis",
  "Apocalypse now",
  "The Godfather"
);

let nothingInReturnsNumber: () => number;

let inputInStringOut: (input: string[], count: number) => string;

let movies: string[];

movies = ["Apocalypto", "Titanic", "Tenet", "Inception", "Goodfellas"];

const getMovieAt = (index: number): string => {
  return movies[index];
};

getMovieAt(3);

//a function that takes a callback as a parameter
const someFunc = (getMovieAt: (arg: number) => string) => {
  for (let i = 0; i < movies.length; i++) {
    console.log(getMovieAt(i));
  }
};

// this is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;

// this is a variable that either returns undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;

type StringToNum = (arg: string) => number;

const string2number: StringToNum = (arg) => {
  return arg.length;
};

let undefinedArrays: number[];

undefinedArrays = [1, 3];

//this is a type for a function that returns an array of strings
let createStrings: () => string[];

//this is an array of functions that each return a string
let stringCreators: (() => string)[];

let stringOrArrayOfNumbers: string | number[];

stringOrArrayOfNumbers = [1, 2, 3, 4];
stringOrArrayOfNumbers = "five";

let arrayOfStringOrNumbers: (string | number)[];

arrayOfStringOrNumbers = [1, "two", 3, "four"];

let arrayOfStringArrays: string[][];

arrayOfStringArrays = [
  ["hesky", "beckham"],
  ["pirlo", "maldini"],
  ["carlos", "bebeto"]
];

//doing the same thing but with the 'type' keyword
type twoDNumberArrays = number[][];

const randomNumbers: twoDNumberArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const numbersThatMatch: twoDNumberArrays = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
];

const numbers = [1, 2, 3];
const lettersAndNumbers = ["a", "b", "c", ...numbers];

//This is mutable with Array.push or Array[index] = newValue
const mutableArray = ["dkc", 110, new Date()];

//This is immutable, it is read only
const immutableArray = ["dkc", 110, new Date()] as const;

interface person {
  readonly name: string;
  readonly age: number;
  readonly height: string;
}

//this object is immutable
const Ibrahim: person = {
  name: "Ibrahim",
  age: 23,
  height: "5'7"
};

interface funcInterface {
  (arg: string): number;
}

const returnLength: funcInterface = (arg) => {
  return arg.length;
};

interface anyObjKeys {
  [i: string]: string;
}

const keysTestObj: anyObjKeys = {
  one: "first",
  two: "second"
};

interface fixedWithAny {
  number: 1;
  [i: string]: number;
}

const keysTestObj2: fixedWithAny = {
  number: 1,
  pages: 5,
  people: 12
};

interface writing {
  author: string;
}

interface book extends writing {
  pages: number;
}

const malazan: book = {
  author: "Steven Erikson",
  pages: 70000
};

interface giveString {
  giveString(): string;
}

interface giveNumber {
  giveNumber(): number;
}

interface giveStringAndNumber extends giveString, giveNumber {
  giveEither(): string | number;
}

const givesFunc = (object: giveStringAndNumber) => {
  object.giveString();
  object.giveNumber();
  object.giveEither();
};

//interface/type merging, not advisable because it confuses code
interface merge {
  firstKey: string;
}

interface merge {
  secondKey: number;
}

const mergedObj: merge = {
  firstKey: "yay",
  secondKey: 3
};

class Greeter {
  greet = (name: string) => {
    return `hello ${name}`;
  };
}

const greetSomeone = new Greeter();

console.log(greetSomeone.greet("samantha"));

//this way makes sure an arg was passed and checks if the arg is of the right type
class Greeter2 {
  constructor(name: string) {
    console.log(`I hail you, dear ${name}`);
  }
}

new Greeter2("Agbani Darego");

class Trip {
  place: string;
  constructor(arg: string) {
    this.place = arg;
  }
}

const newTrip = new Trip("Toronto");

console.log(newTrip.place);

class Random {
  name = "random";
  height?: string;
  length: number;

  constructor(arg: string) {
    this.length = arg.length;
  }
}

interface Learner {
  student: string;
  study(hours: number): void;
}

class Enii implements Learner {
  student: string;

  constructor(name: string) {
    this.student = name;
  }

  study = (hours: number): void => {
    for (let i = 0; i < hours; i++) {
      console.log(`studying for hour ${hours}`);
    }
  };
}

const eniiStudy = new Enii("Eniitan");
eniiStudy.study(4);

class Teacher {
  teach = () => {
    console.log("I am teaching");
  };
}

class StudentTeacher extends Teacher {
  learn = () => {
    console.log("I am learning how to teach");
  };
}

const studentTeacher = new StudentTeacher();

studentTeacher.learn();
studentTeacher.teach();

// A class that delegates methods to its subclassess
abstract class School {
  name: string;

  constructor(arg: string) {
    this.name = arg;
  }
  //this method will be established by a subclass
  abstract getStudentsLevel(): string[];
}

//like this
class NurserySchool extends School {
  getStudentsLevel = (): string[] => {
    return ["Nursery schoolers"];
  };
}

const micAlise = new NurserySchool("Micalice");

console.log(micAlise.name);

interface Ratings {
  audience: number;
  critics: number;
}

const getRatings = (rating: Ratings, key: keyof Ratings): number => {
  return rating[key];
};

const reservoirDogs: Ratings = {
  audience: 5000,
  critics: 400
};

const RD_critics = getRatings(reservoirDogs, "critics");

console.log(RD_critics);

const getRatings2 = (key: keyof typeof reservoirDogs): number => {
  return reservoirDogs[key];
};

console.log(getRatings2("audience"));

const newError = new Error();
newError.message = "enny's error message";

console.error(newError.message);

//generic function
function testFunc<Input>(arg: Input) {
  return arg;
}

console.log(testFunc("yoo"));

//generic discriminated union
interface failedresult {
  error: Error;
  success: false;
}

interface successResult<Data> {
  data: Data;
  success: true;
}

type Result<Data> = successResult<Data> | failedresult;

const resultHandler = (result: Result<string>) => {
  if (result.success) {
    console.log(result.data);
  } else {
    console.error(result.error);
  }
};

//GENERIC DEFAULTS (here type T defaults to string if it isn't specified)
interface Quote<T = string> {
  value: T;
}

//sets it to number
const explicitlySet: Quote<number> = { value: 2242 };

//not set, so it defaults to string
const notSet: Quote = { value: "abracadabra" };

const textPromise = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Done!"), 50);
});

const textPromiseResultHandler = async () => {
  const textPromiseResult = await textPromise;
  const textLength = textPromiseResult.length;
  console.log(textPromiseResult, textLength);
};

textPromiseResultHandler();

const authorShelby: Character = {
  name: "Author Shelby",
  catchphrase: "By the order of the peaky fukking blinders"
};

const madeInLagos: Album = {
  name: "Made In Lagos",
  artiste: "Wizkid"
};

const testArray = new Array<string>();
testArray.push("abc", "due");

const yikes: myNameSpace.value = "yoyo";

//Type operations (not advisable)
type Animals = "baboon" | "snake" | "orangutan";

type AnimalCounts = {
  [I in Animals]: number;
};

const animalNumbers: AnimalCounts = {
  baboon: 12,
  snake: 23,
  orangutan: 900
};

//Template literal types

//must start with 'Hey'

type Greeting = `Hey${string}`;

const testGreeting: Greeting = "Hey, Kareem";

type Brightness = "dark" | "light";
type Color = "blue" | "red";

type BrightnessAndColor = `${Brightness}-${Color}`;
const colorShade: BrightnessAndColor = "dark-blue";
