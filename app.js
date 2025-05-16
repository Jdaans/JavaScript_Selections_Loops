console.log("Hello World!\n==========\n");

// Exercise 1 Section

for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}


// Exercise 2 Section

for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ")
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ")
        }

        if (i % 5 == 0) {
            console.log("BUZZ")
        }
    }
}


// Exercise 3


let i = 1

do {
    console.log(i);
    i++;
} while (i < 100);

//


do {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ");
        }

        if (i % 5 == 0) {
            console.log("BUZZ");
        }
    }
    i++; 
} while (i < 100);


// Exercise 4

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i = 1; i <= n; i++) {
    if (i == value) {
    console.log(`Found ${value}!`);
    break;
    }

    if (i == n) {
    console.log(`Did not find ${value}.`);
    }
}

// Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 100); // creates a random number between 100 and 1000


for (let i = start; i <= end; 1++) {
   let output = "";

   if (i % fizzDivisor == 0) {
    output += "FIZZ";
   }

   if (i % buzzDivisor == 0) {
    output += "BUZZ";
   }

   console.log(i);
}






