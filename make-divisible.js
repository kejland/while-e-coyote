//Write a program that prompts the user for two numbers, x and y. The program should add one to x until it is divisble by y.

const prompt = require("prompt-sync")({sigint:true});

let x = Number(prompt("Enter value for x: "));
let y = Number(prompt("Enter value for y: "));

while (x % y !== 0){
   console.log(x);

    x += 1; //adds one to x each time it is not divisible by y
    
}

console.log(x + " is divisible by " + y)