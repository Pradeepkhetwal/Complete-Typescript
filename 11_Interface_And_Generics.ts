interface Chai{
  flavour: string;
  price: number;
}

// Interface k apne alag fayde hai aur type k apne alag.

// We can use interface to define the structure of an object. It is similar to type but it can also be used to define the structure of a class. We can also use interface to define the structure of a function.
const masala: Chai = {
  flavour: "Masala",
  price: 20
}

// interface can also be used to define the structure of a function as below.
interface DiscountCalculator {
  //below means Any function that takes a number and returns a number.As we have used parenthesis means we are talking about function.
  (price:number):number
}

const apply: DiscountCalculator = (price) => {
  return price*50;
}


interface Vechicle{
  start(): void;
  stop(): void;
}
// interfaces are also used to define the structure of a class as below.
const Bike: Vechicle = {
  start() {
    console.log("Bike started");
  },
  stop(){
    console.log("Bike stopped");
  }
}


// index signature in interface is used to define the structure of an object with dynamic keys as below.
interface ChaiRating{
  // Below as we have used square brackets means an object can have any string property name (Masala, Ginger, etc.), and the value of every property must be a number.
  [flavour:string]: number;
}

const ratings: ChaiRating = {
  // Ab dekho iske andar data kaise ayega.

  masala: 5.4,
  ginger:4
}


interface User{
  name: string,

}

interface User{
  age:number
}

// Interfaces merge together so we need to satisfy all the properties of each interface.
const u: User = {
  name: "John",
  age:40
}


interface A{
  a: String;
}

interface B{
  b: String;
}

// This is how we can extend multiple interfaces.
interface C extends A, B{

}

// Generics in typescripts are templates. They allow us to create reusable components that can work with any data type. We can use generics with functions, interfaces and classes.
// Means T can be any type and it will be decided at the time of function call.
// The below functin will accept an item of any type and return an array of that type.
function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray(5);
wrapInArray("Hello");
wrapInArray({ name: "John", age: 30 });

// Instead of T we can use any other letter for generic type parameter.
function pair<A, B>(a: A, b: B):[A,B] {
  return [a, b];
}

pair(1, "one"); // This will return a tuple of type [number, string]
pair("Hello", true); // This will return a tuple of type [string, boolean]

// Generic interfaces.

interface Box<T>{
  content: T;
}

const box:Box<number>= {
  content: 4
}

const box2:Box<string>= {
  content: "hello"
}


// Partial<T> is a utility type in TypeScript that takes a type T and makes all of its properties optional. This means that when you use Partial<T>, you can create an object that has some or all of the properties of T, but you are not required to provide values for all of them.


interface props<T>{
  status:number,
  data:T
}

const res: props<{ flavour: string }> = {
  status: 200,
  data:{flavour: "Masala"}
}





