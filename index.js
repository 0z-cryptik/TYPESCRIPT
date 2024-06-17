"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("laughter thingy");
let firstName = "whitney";
let lifespan;
let specAda;
specAda = "enii";
let james;
james = 2285643479;
let harryPotter = {
    author: {
        firstName: "J.K",
        lastName: "Rowling"
    },
    title: "Harry Potter"
};
let percyJackson = {
    author: {
        firstName: "Rick",
        lastName: "Riordan"
    },
    title: "Percy Jackson and The Olympians",
    pages: 5000
};
console.log(specAda);
let hamlet = Math.random() > 0.5
    ? { writer: "William Shakespeare", title: "Hamlet", pages: 1 }
    : { writer: "William Shakespeare", title: "Hamlet", rhymes: true };
if ("pages" in hamlet) {
    console.log(hamlet.pages);
}
else {
    console.log(hamlet.rhymes);
}
let toyotaCamry = {
    name: "Toyata Camry le",
    year: 2002
};
let toyotaCamryWithValue = {
    name: "Toyata Camry le",
    year: 2002,
    valuable: false
};
//must take in one parameter of type string
const sing = (song) => {
    console.log(`singing${song}`);
};
//must take in 2 parameters of type string
const sing2songs = (song1, song2) => {
    console.log(`singing${song1} ${song2}`);
};
//must take in song1, song2 isn't compulsory
const sing1or2songs = (song1, song2) => {
    console.log(`singing${song1} ${song2 && "and song 2"}`);
};
const sing1or2or3songs = (song1, song2, song3) => {
    console.log(`singing${song1}`);
    if (song2)
        console.log(`singing ${song2}`);
    if (song3)
        console.log(`singing ${song3}`);
};
//accepted
const hakeem = {
    name: "Hakeem Olajuwon",
    email: "hakeem@gmail.com",
    objectId: "kfknj34rw4tk4kn",
    number: 844844484
};
const rateNames = (name, rating = 0) => {
    console.log(`${name} is rated ${rating}`);
};
rateNames("rachel");
rateNames("eniitan", 5);
const moviesFromADirector = (director, ...movies) => {
    for (const movie of movies) {
        console.log(`${movie} by ${director}`);
    }
};
moviesFromADirector("F.F Copolla", "Metropolis", "Apocalypse now", "The Godfather");
let nothingInReturnsNumber;
let inputInStringOut;
let movies;
movies = ["Apocalypto", "Titanic", "Tenet", "Inception", "Goodfellas"];
const getMovieAt = (index) => {
    return movies[index];
};
getMovieAt(3);
//a function that takes a callback as a parameter
const someFunc = (getMovieAt) => {
    for (let i = 0; i < movies.length; i++) {
        console.log(getMovieAt(i));
    }
};
// this is a function that returns a union: string | undefined
let returnsStringOrUndefined;
// this is a variable that either returns undefined or a function that returns a string
let maybeReturnsString;
const string2number = (arg) => {
    return arg.length;
};
let undefinedArrays;
undefinedArrays = [1, 3];
//this is a type for a function that returns an array of strings
let createStrings;
//this is an array of functions that each return a string
let stringCreators;
let stringOrArrayOfNumbers;
stringOrArrayOfNumbers = [1, 2, 3, 4];
stringOrArrayOfNumbers = "five";
let arrayOfStringOrNumbers;
arrayOfStringOrNumbers = [1, "two", 3, "four"];
let arrayOfStringArrays;
arrayOfStringArrays = [
    ["hesky", "beckham"],
    ["pirlo", "maldini"],
    ["carlos", "bebeto"]
];
const randomNumbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const numbersThatMatch = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];
const numbers = [1, 2, 3];
const lettersAndNumbers = ["a", "b", "c", ...numbers];
//This is mutable with Array.push or Array[index] = newValue
const mutableArray = ["dkc", 110, new Date()];
//This is immutable, it is read only
const immutableArray = ["dkc", 110, new Date()];
//this object is immutable
const Ibrahim = {
    name: "Ibrahim",
    age: 23,
    height: "5'7"
};
const returnLength = (arg) => {
    return arg.length;
};
const keysTestObj = {
    one: "first",
    two: "second"
};
const keysTestObj2 = {
    number: 1,
    pages: 5,
    people: 12
};
const malazan = {
    author: "Steven Erikson",
    pages: 70000
};
const givesFunc = (object) => {
    object.giveString();
    object.giveNumber();
    object.giveEither();
};
const mergedObj = {
    firstKey: "yay",
    secondKey: 3
};
class Greeter {
    constructor() {
        this.greet = (name) => {
            return `hello ${name}`;
        };
    }
}
const greetSomeone = new Greeter();
console.log(greetSomeone.greet("samantha"));
//this way makes sure an arg was passed and checks if the arg is of the right type
class Greeter2 {
    constructor(name) {
        console.log(`I hail you, dear ${name}`);
    }
}
new Greeter2("Agbani Darego");
class Trip {
    constructor(arg) {
        this.place = arg;
    }
}
const newTrip = new Trip("Toronto");
console.log(newTrip.place);
class Random {
    constructor(arg) {
        this.name = "random";
        this.length = arg.length;
    }
}
class Enii {
    constructor(name) {
        this.study = (hours) => {
            for (let i = 0; i < hours; i++) {
                console.log(`studying for hour ${hours}`);
            }
        };
        this.student = name;
    }
}
const eniiStudy = new Enii("Eniitan");
eniiStudy.study(4);
class Teacher {
    constructor() {
        this.teach = () => {
            console.log("I am teaching");
        };
    }
}
class StudentTeacher extends Teacher {
    constructor() {
        super(...arguments);
        this.learn = () => {
            console.log("I am learning how to teach");
        };
    }
}
const studentTeacher = new StudentTeacher();
studentTeacher.learn();
studentTeacher.teach();
// A class that delegates methods to its subclassess
class School {
    constructor(arg) {
        this.name = arg;
    }
}
//like this
class NurserySchool extends School {
    constructor() {
        super(...arguments);
        this.getStudentsLevel = () => {
            return ["Nursery schoolers"];
        };
    }
}
const micAlise = new NurserySchool("Micalice");
console.log(micAlise.name);
const getRatings = (rating, key) => {
    return rating[key];
};
const reservoirDogs = {
    audience: 5000,
    critics: 400
};
const RD_critics = getRatings(reservoirDogs, "critics");
console.log(RD_critics);
const getRatings2 = (key) => {
    return reservoirDogs[key];
};
console.log(getRatings2("audience"));
const newError = new Error();
newError.message = "enny's error message";
console.error(newError.message);
//generic function
function testFunc(arg) {
    return arg;
}
console.log(testFunc("yoo"));
const resultHandler = (result) => {
    if (result.success) {
        console.log(result.data);
    }
    else {
        console.error(result.error);
    }
};
//sets it to number
const explicitlySet = { value: 2242 };
//not set, so it defaults to string
const notSet = { value: "abracadabra" };
const textPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 50);
});
const textPromiseResultHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    const textPromiseResult = yield textPromise;
    const textLength = textPromiseResult.length;
    console.log(textPromiseResult, textLength);
});
textPromiseResultHandler();
const authorShelby = {
    name: "Author Shelby",
    catchphrase: "By the order of the peaky fukking blinders"
};
const madeInLagos = {
    name: "Made In Lagos",
    artiste: "Wizkid"
};
const testArray = new Array();
testArray.push("abc", "due");
const yikes = "yoyo";
const animalNumbers = {
    baboon: 12,
    snake: 23,
    orangutan: 900
};
const testGreeting = "Hey, Kareem";
const colorShade = "dark-blue";
