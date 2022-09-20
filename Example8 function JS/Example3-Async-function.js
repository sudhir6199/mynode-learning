//Asnynchronous Functions vs Synchronous Function

//Statement1
function myGreeting() {
    console.log("\nStatement1: I will execute LAST although defined first\n");
}

const myTimeout = setTimeout(myGreeting, 2000); //2000 is milliseconds mean 2 seconds.



//Statement2
console.log("\nStatement2: I will execute FIRST although defined last\n");


// Point to note is instead of waiting 2sec and execute Statement1 here Statement2 is executed first.
// This is because NodeJs is single thread program.