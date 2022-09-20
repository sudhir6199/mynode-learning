//Asnynchronous Functions vs Synchronous Function : https://www.geeksforgeeks.org/how-to-create-an-asynchronous-function-in-javascript/


//Statement1
function parent()
{
     let a=1;
     let b=1;
     return a+b;
}

async function child(arg2=3) {
       let arg1=await parent();  //await: The “async” function contains “await” that pauses the execution of “async” function. “await” is only valid inside the “async” function.
       return console.log("\nStatement1: I will execute LAST although defined first:", arg1+arg2,"\n");
}

child();

//Statement2
console.log("\nStatement2: I will execute FIRST although defined last\n");

// Point to note is instead of waiting 2sec and execute Statement1 here Statement2 is executed first.
// This is because NodeJs is single thread program.