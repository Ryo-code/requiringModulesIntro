var doubler = require("./module2b-required");
var input = process.argv[2];
console.log("You have decided to double: " + input);
doubler.doubleMsg(input);
