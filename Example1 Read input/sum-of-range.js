//PEMDAS
const prompt = require('prompt-sync')();
//Take input & convert to int
var n=parseInt(prompt("please enter the range number:"));
var range=(n*(n+1))/2
console.log("The " + n +" range sum is: "+range);