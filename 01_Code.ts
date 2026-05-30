
// Here name:string means that the parameter name must be of type string and the :string after the parenthesis means that the function will return a string as well.
function greet(name: string): string{
  return `Hello ${name}`;
}

console.log(greet("World"));
// console.log(greet(134)); This will give an error because 134 is not a string.


