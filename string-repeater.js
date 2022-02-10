//Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.

const prompt = require("prompt-sync")({sigint:true});

let str = prompt("Enter a string: ");

console.log(str);

while (str.length < 10){
    str += str;
    
    console.log(str);
}