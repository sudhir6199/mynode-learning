//Example1: throw can be used anywhere
//console.log("before throw");

//throw "Too big";

//throw 500;

//console.log("after throw");


//Example2: If you use throw together with try and catch, you can control program flow and generate custom error messages.
var x = 1;
try {
  if(x == "") throw "empty";
  if(isNaN(x)) throw "not a number";
  x = Number(x);
  if(x < 5) throw "too low";
  if(x > 10) throw "too high";
}
catch(err) {
  console.log("Input is " + err);
}

//Example3
x=6;
try {
  if(x == "") throw "empty";
  if(isNaN(x)) throw "not a number";
  x = Number(x);
  if(x < 5) throw "too low";
  if(x > 5) throw "too high";
}
catch(err) {
  console.log("Input is " + err);
}

