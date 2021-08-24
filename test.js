"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
      return "FizzBuzz";
    } else if (i % 5 === 0) {
      console.log("Buzz");
      return "Buzz";
    } else if (i % 3 === 0) {
      console.log("Fizz");
      return "Fizz";
    } else {
      console.log(n);
      return n;
    }
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  fizzBuzz(n);
}

// Given a number n, for each integer i in the range from 1 to n invlusive, print one value per line as follows:
// if i is a multiple of both 3 and 5, print FizzBuzz
// if i is a multiple of 3(but not 5), print Fizz
// if i is a multiple of 5(but not 3), print Buzz
// if i is not a multiple of 3 or 5, print the value of i

//FizzBuzz has the following parameters(s):
//  int n : upper limit of values to test (inclusive)
//Return : NONE
//Prints :
//  The function must print the appropriate response for each value i in the set {1,2,... n} in ascending order,each on a separate line

//Constraints
//0 < n < 10000

//Sample Output
//1
//2
//Fizz
//4
//Buzz
//Fizz
//7
//8
//Fizz
//Buzz
//11
//Fizz
//13
//14
//FizzBuzz
