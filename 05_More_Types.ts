


let response: any = "42";


// this is called forceful type assertion that is done using as keyword. It is used to tell TypeScript that believe that the type of this variable is this only and then we are able to treat that varaible as that type and use the predefined methods of that type. Without type assertion typescript doesn't provide us the methods as it treat it as any type most of the time,and any type doesn't have any predefined methods.
let numericLenght: number = (response as string).length;

let bookString = '{"name":"who moved my cheese"}';
type Book = {
  name: String;
}
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);


const inputElment = document.getElementById("username") as HTMLInputElement;


let value: any;

value = "chai";
value = 2.5;

value.toUpperCase(); // This will give an error because value is of type any and it can be a string or a number. So we need to use type assertion to tell TypeScript that value is a string before calling toUpperCase method.


// unknown type is used to indicate that a value can be of any type, but we don't know what type it is. It is similar to any type, but it is safer because we have to check the type of the value before using it. For example, if we have a function that takes an unknown type as a parameter, we can check the type of the parameter before using it.

let newValue: unknown;

newValue = "chai";

newValue = 3;

if (typeof newValue === "string") {
  newValue.toUpperCase(); // This will work because we have checked that newValue is a string before calling toUpperCase method.
}


// Try catch block.

try {
  
} catch (error) {
  // we mostly use error.message but technically we don't have any gurantee that error will have message because it can have any data.So to handle this we check it as an instance of Error.

  // console.error(error.message);
  if(error instanceof Error){
    console.error(error.message);
  }
  
}


type Role = "admin" | "user" | "guest";

function redirectBasedOnRole(role: Role): void{
  if (role == "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }

  if (role == "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
// Here if you'll hover over role it will show it's type as gues because we have already handled admin and  user roles and return(important) is used to exit from the function after handling the admin and user roles. So here we are left with only guest role which is not handled and it will be of type guest. Hence we can use never type to handle this case.
  role;
}


// never type is used to indicate that a function will never return a value. It is also used to indicate that a function will never complete its execution. For example, a function that throws an error or a function that has an infinite loop will have a return type of never.
function neverReturn(): never{
  while (true) {
    
  }
}


