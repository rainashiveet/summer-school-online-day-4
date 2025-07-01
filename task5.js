function add(a, b){   //addition
    return a + b;
}
console.log(add(12, 14));

// (square of a number)
var square  = function(x){
    return x*x;
}
console.log(square(12));

// (user with their name)
let greetUser = (name) =>{
    console.log("Hello" , `${name}!`);
}

greetUser("Parth");