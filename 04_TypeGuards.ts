// Here we will learn about Type Guards.

// Note-: Instead of using any we can also use unknown type which is a safer alternative to any because it forces us to do some type checking before we can use the variable. With any, we can do anything with the variable without any checks, which can lead to runtime errors. With unknown, we have to check the type of the variable before we can use it, which helps us catch errors at compile time rather than at runtime.

// Type Narrowing-:Means we just clears the type of the variable to a specific type and apply logic accordingly , this is not a concept but a good coding practise below are examples for the same.


// Below in getChai we are confidently using the type guard by using typeof operator to check the type and exceute the logic accordingly.

function getChai(kind: string | number) {
  if (typeof kind === 'string') {
    return `Here is your ${kind} chai`;
  }
  return `Here is your ${kind} ml chai`;
}

// In typescript the parameter using ?: means that the parameter is optional.
// Below also we are using type guard to check if the msg parameter is provided or not and then we are executing the code accordingly. This is just a good coding practice.
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

// In union types we can also specify value and type of the parameter at the same time.
function orderChai(size: "small" | "medium" | "Large" | number) {
  if (size == "small") {
    return "small cutting chai";
  }

  if (size == "medium" || size == "Large") {
    return `make extra chai`;
  }

  return `chai order ${size} ml`;
}



class KulhadChai{
  serve() {
    return `Serving kulhad chai`;
  }
}
class CuttingChai{
  serve() {
    return `Serving cutting chai`;
  }
}

// Instance of means object of , it is also a guardrail hence in return it will return the serve method of the KulhadChai class.
function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

// We can also define our cutom type , here type is a keyword. And the type and sugar inside parenthesis are the properties not the keywords and the type of these properties are string and number respectively.
type ChaiOrder = {
  type: string
  sugar:number
}

// is is used To tell TypeScript the exact type of a variable after a runtime check.
function isChaiOrder(obj: any): obj is ChaiOrder{
  return (
    typeof obj === 'object' && obj.type != null && typeof obj.type === "string" && obj.sugar != null && typeof obj.sugar === "number"
  )
}


function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`;
  }
  return `Serving chai ${item}`;
}

// We can define our own custom type guards as well like masala , ginger ,etc.
// Below type has direct value like masala , ginger, elaichi. Once defined now the type value will remain same whatever that was defined.
type MasalaChai = { type: "masala", spiceLevel: number };

type GingerChai = { type: "ginger", amount: number };
 
type ElaichiChai = { type: "elaichi", aroma: number };


type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
      break;
    case "ginger":
      return `Ginger Chai`;
      break;
    case "elaichi":
      return "Elaichi Chai";
      break; 
  }
}

function brew(order: MasalaChai | GingerChai) {
  if("spiceLevel" in order){
    return `Brewing ${order.type} chai with spice level ${order.spiceLevel}`;
  }
}
