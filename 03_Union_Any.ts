// We will understand union and any types here.


// Union types allow us to specify that a variable can be of multiple types. We use the pipe symbol (|) to separate the types. For example, if we want a variable to accept both numbers and strings, we can use a union type like this:
let subs: number | string = '100k';//This accepts both numbers and string.

subs = 10000; //This is fine because subs can be a number as well.


let moods:'Angry' |'Happy' | 'Sad' = 'Happy';//This accepts only these three values and no other value is allowed.

// moods = "good"; //This will give an error because "good" is not one of the allowed values.
moods = "Happy"; //This is fine because "Happy" is one of the allowed values.



const orders = ['12', '22', '32'];//This is an array of strings.

let currentOrder: string | undefined;//this varaible can be of type string or undefined. We have used undefined here because we want to initialize this variable with a value later and if let say anyhow it is not initialzed in the loop then in that case it will become undefined but we haven't given it undefined then in that case it will give typescript error.

// And we are also assingning the type to currentOrder variable because if we don't then it automatically infer type any which means it doesn't care what type of value we assign to it even after the loop.

// So to avoid this issue we are assgning it with type.

// As a developer usually try to avoid any by either intializing the variable during declaration or assign them types.
for(let order of orders){
  if (order === '12') {
    currentOrder = order;
    break;
    }
} 

console.log(currentOrder);




