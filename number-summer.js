const prompt = require("prompt-sync")();

let num = prompt("Enter some numbers (type 'done' when complete): ");

let total = 0;

while (num !== "done"){

    //could do:
    // let num2 = Number(num);
    // total = total + num2

    total = total + parseInt(num); 
    num = prompt("> ");
}

console.log("Your total is: " + total);
