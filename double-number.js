//Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.

const prompt = require("prompt-sync")({sigint:true});

let n = Number(prompt("Enter a number: "));


while (n < 100){

    n *= 2; //multiplication assignment

    console.log(n);


}