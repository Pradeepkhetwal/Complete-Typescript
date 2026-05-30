// Inferencing.-: Means that Ts automatically infers that the type of this drink variable is string because we have assigned it a string value. So we don't need to explicitly specify the type of the variable in this case. This is called type inference.We don't always need to specify the type of a variable.
let drink = "water";



// Below is type annotation becasue here we are specifiying the type of the variable explicitly. In this case we are saying that the variable drink is of type string.
let chaiFlavour: string = "masala chai";

chaiFlavour = "ginger chai"; // This is fine because chaiFlavour is of type string.

// chaiFlavour = 123; This will give an error because 123 is not a string.


