// In this lecture we will learn about Object Oriented Programming in TypeScript

class Chai {
  flavour:string;
  price: number
  
  // In any class in ts it is always recommended to define a constructor.

  // Concept same hai bhai just like other languages.

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}


const masalaChai = new Chai("Masala", 20);
masalaChai.flavour = "Masala";
masalaChai.price = 20;


// Access Modifiers

class Coffee {
  public flavour: string; // can be accessed from anywhere
  private secretIngredient: string; // can only be accessed within the class

  // once we declare any private field we need to create a method (just like getter and setter in java) the concept is samme , method to access the private field.

  revealSecret() {
    return this.secretIngredient;
  }

  protected shopName = "Coffee Shop"; // can be accessed within the class and its subclasses
}


class SubCoffee extends Coffee{
  getName() {
   return this.shopName; // can access protected field from parent class
  }
}

// also if we make object of this subcoffee field then we can access the protected field from that object as well.But for private field we cannot access it from any object of the class or its subclass.

new SubCoffee().shopName; // can access protected field from object of subclass


class Wallet{
  #balance: number; // We can declare the private field using the # symbol as well.

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();

w.getBalance;


// There are readonly fields in ts as well which can only be assigned once either at the time of declaration or in the constructor.

class Cup {
  readonly size: number = 200;
  constructor(size: number) {
    this.size = size;
  }
}
// The constructor will give error if we try to assign value to size field because it is readonly and can only be assigned once at the time of declaration or in the constructor.


// In good practise when we declare any field as private we start it's name using a underscore _.

// Getters and Setters in ts are created using get and set keywords respectively. 

class Cat{
  private _name: string = "";

  get name():string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const c = new Cat();

c.name = "Tom"; // This will call the setter method to set the value of _name field.

console.log(c.name); // This will call the getter method to get the value of _name field.

// if we haven't created getter and setter methods for the private field then we cannot access it from outside the class at all.

// Static member is a member of the class that can be accessed without creating an instance of the class. It is shared among all instances of the class.


class EkChai{
  static shopName: string = "Tapriwala Chai";
}

console.log(EkChai.shopName); // Accessing static member without creating an instance of the class.

// Abstract class.

abstract class Vehicle{
  abstract startEngine(): void; // Abstract method which must be implemented by the subclasses.
  
  // All the methods in an abstract class can be abstract or non-abstract. If a method is non-abstract then it must have a body and can be accessed by the subclasses as well.

  stopEngine() {
    console.log("Engine stopped");
  }
}


class Bike extends Vehicle{
  startEngine(): void {
    console.log("Bike engine started");
  }

}
