type ChaiOrder = {
  type: string,
  sugar: number,
  strong: boolean
}

function makeChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}


// We can write the above method as below.

function makechaiwith(order: ChaiOrder) {
  console.log(order);
}

// Interfaces are used to define the structure of an object. It is similar to type but it is more powerful because it can be extended and implemented. We can also use interfaces to define the structure of a class.


// there are some speicial cases in types where we cannot implement those types through classes so for those we need interfaces.

// Below is ex for above.
type cupSize = "small" | "medium" | "large";

// below i've defined a class that implements the cupSize but this gives an error because a class can only implement an object type or intersection of object types with statically known members.
// Below class can easily implmenet any type but when we use union in those types we cannot implment those types.


// class chai implements cupSize{

// }


// To solve the above issue we use interfaces as below.
// We create interface using the interface keyword and we don't use = sign to define .
interface CupSize{
  size: "small" | "large";
}

// Any class implmeneting any interface must has to define it's properties and methods as defined in the interface otherwise it will give an error. Extra prop and methods are allowed in the class.
class Chai implements CupSize{
  // If we directly assign value to size , then ts will assert size as type string which is wrong. So we need to explicitly tell ts that size is of type "small" | "large" and then we can assign value to it.Else it will throw error.
    size: "small" | "large" = "small";
}

type Response = { ok: true } | { ok: false };

// Class cannot implement union types.
// class test implements Response{

// }


// Intersection.

type BaseChai = { teaLeaves: number };

type Extra = { masala: number };

// Here & is used to intersect means to combine both.
type MasalaTea = BaseChai & Extra;


const cup:MasalaTea = {
  teaLeaves: 2,
  masala: 3
}


type Config = {
  readonly appname: string;
  version: number;
}

const cfg: Config = {
  appname: "chai app",
  version: 1.0
}

// We cannot set the appname property of cfg becasue as defined it is readonly , so readonly comes into play when we first initialize that property with any value , after that we cannot change the value so below gives an errror.

// cfg.appname = "new chat app";

