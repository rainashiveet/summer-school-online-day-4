function greetUser(name, callback) {
  console.log("Hi", name);
  callback(); // this could be any function
}

greetUser("Shiveet", function() {
  console.log("Welcome to JavaScript!");
});
