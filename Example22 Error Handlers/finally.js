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
finally{
    a=1
    b=2
    c=a+b
    console.log("sum:a+b",c);
    console.log("end of program");
}