function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type} chai`);
}

function getChaiPrice(): number{
  return 20;
}

function makeOrder(order:string){
  if (!order) {
    return null;
  }

  return order;
}

// Logger functions are those which do not return any value.

function logChai(): void{
  console.log("Chai is being made");
}


// we can give default value to any param as below.
function orderchai(type: string = "Chai") {
  console.log(`Ordering ${type} chai`);
}

// Functions can also have complex params like below.
function createChai(order: { type: string, sugar: number; size: "small" | "large" }):number{
  return 4;
}






