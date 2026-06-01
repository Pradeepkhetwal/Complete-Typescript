// We will study about arrays, enums,and tuples in this lec.


const chaiFlavours: string[] = ["Masala", "Ginger", "Cardamom"];

const ratings:Array<number> = [4.5,4.0,5.0];

// We can also have array of objects as below.

type Chai = {
  name: string;
  price: number;

}

const menu: Chai[] = [{
  name: "Masala Chai",
  price: 20
}, {
  name: "Ginger Chai",
  price: 25
  }];

// Read only array. Arrays which we can define but cannot modify.


const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"];

// cities.push("Chennai"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// 2D arrays.
const table: number[][] = [
  [1, 3, 5],
  [2,45,5]
]


// Tuples -: tuples are a special type of array which can have fixed number of elements and types. They are defined using square brackets [] and the types of elements are defined in order.
// Behind the scenes tuples are also arrays but with fixed length and types.

// Here order in which elements are entered are fixed and type is fixed.
let chaiTuple: [string, number] = ["Masala Chai", 20];

let userInfo: [string, number, boolean];

  userInfo = ["John Doe", 30, true]


let t: [string, number] = ["Hello", 42];
t.push("extra"); // This is allowed, but it will not cause a type error because tuples in TypeScript are implemented as arrays. However, it can lead to unexpected behavior when accessing elements of the tuple. For example, t[2] would be "extra", which is not part of the defined tuple type.


// We can also make readdonly tuples like this .

const location: readonly [number, number] = [28.6139, 77.2090];


// we can also define named tuples.

const chaiItems: [name: string, price: number] = ["Masala Chai", 20];


// Enums are a way to define a set of named constants. They can be numeric or string based.

// They are created using enum keyword.
// It doesn't use = sign.
enum CupSize{
  SMALL,
  MEDIUM,
  LARGE 
}

// We can use the enum constants as follows.
// The value of size here will be 2 bcoz in ts the default value for enum constants starts from 0 and increments by 1 for each constant if we don't provide any value explicitly.
const size = CupSize.LARGE;

// 
enum Status{
  PENDING = 100,
  SERVED,// Here SERVED will be 101 because it will take the next value after PENDING.
  CANCELLED// Here CANCELLED will be 102 because it will take the next value after SERVED. Either we need to provide values for all constants or we can provide value for only the first constant and rest will take next values automatically.
}


enum ChaiType{
  MASALA = "masala",
  GINGER = "ginger"
}


function makeChai(type: ChaiType) {
  console.log(`Making ${type} chai`);
}

makeChai(ChaiType.MASALA);
// makechai("masala"); // Error: Argument of type '"masala"' is not assignable to parameter of type 'ChaiType'.

// We can also have enums with mixed values as below.
enum RandomEnum {
  ID = 1,
  NAME = "John",
}


// We can also have const enums which are inlined at compile time and cannot be accessed at runtime.

const enum ConstEnum{
  SMALL = 1,
  MEDIUM = 2
}


