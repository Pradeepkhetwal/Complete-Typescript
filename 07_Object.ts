// Below is a chai object.
const chai = {
  name: "Masala Chai",
  price:20
}
// Behind the scenes typescript is doing type inference and it is inferring the type of chai as { name: string, price: number }.

// Below is a object.
let tea: {
  name: string,
  price:number
}


tea = {
  name :" Ginger tea",
  price : 10
}




type Tea = {
  name: string;
  price: number;
  ingredients: string[];
}

const adrakCahi: Tea = {
  name: "Adrak Chai",
  price: 10,
  ingredients: ["tea leaves", "water", "milk", "sugar", "ginger"]
}


type cup = {
  size: string;
}

let smallCup: cup = {
  size:"200ml"
}

let bigCup = { size: "500", material: "steel" };

smallCup = bigCup; // This is allowed because smallCup has all the properties of bigCup and it can have extra properties as well. This is called structural typing. In structural typing, the type of a variable is determined by its structure rather than its name. So if two variables have the same structure, they are considered to be of the same type even if they have different names. This is different from nominal typing where the type of a variable is determined by its name and two variables with different names are considered to be of different types even if they have the same structure.


type User = {
  username: string,
  password: string
}

const u: User = {
  username: "chaicoder",
  password:"123456"
}

type Item = { name: string, quantity: number };

type Address = { street: string, city: string, pin:number };

type Order ={
  id: string;
  items: Item[];
  address:Address
}


type Chai = {
  name: string;
  price: number;
  isHot:boolean
}

const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating chai", updates);
}

updateChai({ price: 25 });
updateChai({ isHot: true });
updateChai({});


type ChaiOrder = {
  name?: string,
  quantity?:number
}


const placeOrder = (order: Required<ChaiOrder>) => {
  console.log("Placing order", order);
}

placeOrder({ name: "MasalaChai", quantity: 2 });

type chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
}

type BasicChaiInfo = Pick<chai, "name" | "price">;


const chaiInfo: BasicChaiInfo = {
  name: "good chai",
  price: 14
}


type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredient: string;
};

type PublicChai = Omit<Chai,"secretIngredient">;