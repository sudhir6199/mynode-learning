//Normal1 function
function Normal1sumof2(arg1,arg2)
{
     result=arg1+arg2
     return result
}

console.log("\nNormal1 function result: " + Normal1sumof2(1,2) + "\n");


//Normal2 function
Normal2sumof2 = function (arg1,arg2)
{
     result=arg1+arg2
     return result
}

console.log("\nNormal2 function result: " + Normal2sumof2(1,2) + "\n");


//Arrow1 function: when there are multiple arguments so parenthesis around arguments.
arrow1_sumof2=(arg1,arg2) => arg1+arg2;
console.log("\nArrow1 function result: " + arrow1_sumof2(1,2) + "\n");

//Arrow2 function : when there is single arugment so no parenthessis around argument.
arrow2_sumof2=arg1 => arg1+2;
console.log("\nArrow2 function result: " + arrow2_sumof2(1) + "\n");

//Arrow3 function : when there are multiple lines required within function to process so curly braces + return statement.
arrow3_sumof2=arg1 => {
     arg2=2
     return arg1+arg2
};
console.log("\nArrow3 function result: " + arrow3_sumof2(1) + "\n");

//Arrow4 function : No arguments
arrow4_sumof2=()=>3
console.log("\nArrow4 function result: " + arrow4_sumof2() + "\n");


//Arrow4 function : argument default value.
arrow4_sumof2=(arg1,arg2=2)=>arg1+arg2
console.log("\nArrow4 function result: " + arrow4_sumof2(1) + "\n");

//Callback function: A function which is an argument of another function called Callback function.
//Case1: here child1 finction is not calling parent1 function to be its argument! we are sending the output of function parent1() as argument while calling child1 function itself
function parent1()
{
     let a=1;
     let b=1;
     return a+b;
}

function child1(callback,arg2=3) {
       return console.log("Case1: callback function - parent function out:", callback+arg2,"\n");
}

child1(parent1(),2);
child1(parent1());


//Callback function Case2: Create Callback function in the argument section.

function child2(callback=()=>{
     let a=1;
     let b=1;
     return a+b;
},arg2=3) {
       return callback()+arg2
}

console.log("Case2: callback function out:",child2());

//child2(1);    This will replace the argument callback() function with integer 1 & we are calling callback() while summing in return statement.
//child2(1,2);  This will replace the argument callback() function with integer 1 & we are calling callback() while summing in return statement.


//Case3: Create Callback function in the argument section of calling statement.
function child3(callback,arg2=3) {
     return callback()+arg2; //here we are giving () to callback like callback() because the caller just passed function code as argument not actually sending the return value by executing while calling.
}


callback_output=child3(()=>{        // This function code will go as it is as code not the return value, so the child3 function we need to execute this code by speciying callback().
     let a=1;
     let b=1;
     return a+b;
  },2);

console.log("\nCase3: callback function out:",callback_output +"\n");



//Case4: Create Callback function in a variable passed as the argument section of calling statement.
function child4(callback,arg2=3) {
     return callback()+arg2; //here we are giving () to callback like callback() because the caller just passed function code as argument not actually sending the return value by executing while calling.
}

//create callback function
var callback=()=>{
          let a=1;
          let b=1;
          return a+b;
}

callback_output=child4(callback,2);  // This callback var has callback function code that will go as it is as code but not the return value of the callback fuction, so in the child4 function we need to execute this code by speciying callback().


console.log("\nCase4: callback function out:",callback_output +"\n");


//Case6

function calculateSquare(number, callback) {  
     setTimeout(() => {
       const result = number * number;    
       callback(result); //Since the callback function code shared as an argument by the caller, mentioning callback(result) will actually dosent call but execute right there because the function code allready sent by the caller as an argument.
     }, 1000);
 }
 
 

calculateSquare(2, (result) => { //The argument "result" value is not requried to be declared here in this line, because this callback function code will be passed as an argument as it is to calculateSquare function.
     console.log('Result from calculateSquare: ' + result);
    }
);