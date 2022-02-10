const prompt = require("prompt-sync")({sigint:true});

let n = Number(prompt("Enter a number 'n' to find the first 'n' values of the fibonacci sequence: ")); //finishing variable

let a = 0;
let b = 1;

let count = 2;


if(n === 1){
    console.log(a);
} else if(n === 2){
    console.log(a);
    console.log(b);
} else if(n > 2){
    
    console.log(a);
    console.log(b);

    while (count !== n){ 

        total = a + b; 

        console.log(total); //want to show the addition which is the fibonacci sequence

        a = b;
        b = total; //need to change the values of a and b so the total changes as well

    count += 1; // not related to fibonaaci sq, just related in when to finish running the loop
    }

} else {
    console.log("not a valid number")
} 
