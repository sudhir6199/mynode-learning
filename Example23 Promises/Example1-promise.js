/* 
1. Promise is a JavaScript object are used to handle asynchronous operations in JavaScript so "Producing code" is code that can take some time
2. "Consuming code" is code that must wait for the result
3. Purpose: With Promise its easy to manage multiple asynchronous operations so promise can used instead of callbacks where callbacks can create callback hell leading to unmanageable code. 
4. Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. 
5. Promises do provide a better user code readability the code in a more effective and efficient manner especially when implemented for multiple asynchronous operations. 


A Promise has four states: 
i. fulfilled: Action related to the promise succeeded
ii. rejected: Action related to the promise failed
iii. pending: Promise is still pending i.e. not fulfilled or rejected yet
iv. settled: Promise has fulfilled or rejected

Sources:
 i. https://www.w3schools.com/Js/js_promise.asp
 ii. https://www.geeksforgeeks.org/javascript-promises/#:~:text=then()%20is%20invoked%20when,and%20further%20executes%20it%20successfully.

*/

let myPromise = new Promise(function(myResolve, myReject) //Here myResolve and myReject arguments holds the function code passed by the function-call defined in next statement of this js file.
 {
  let x = 0;

  // The producing code (this may take some time)
   if (x == 0) {
     myResolve("OK"); //Here myResolve is a function whose function code is passed as an argument to this myPromise function by the function-call defined in next statement of this js file & since the function-call first argument is function code that accepts only one argument-value, here we are passing "OK" as single argument-value.
   }
   else { 
     myReject("Error"); //Here myReject is a function whose function code is passed as an argument to this myPromise function by the function-call defined in next statement of this js file & since the function-call first argument is function code that accepts only one argument-value, here we are passing "OK" as single argument-value.
   }
 }
);


//Case1: Consuming code i.e. calling the above myPromise() function with two functions as two arguments.
arg1=function(value) {
  console.log("Case1-WORKED:",value);
}
arg2=function(error) {
  console.log("Case1-ERROR:",error);
}

myPromise.then(arg1,arg2);
//Output is WORKED: OK







//Case2: Consuming code : Here we calling the myPromise function swapping the arguments position.
arg1=function(error) {
  console.log("Case2-ERROR:",error);
}

arg2=function(value) {
  console.log("Case2-WORKED:",value);
}

myPromise.then(arg1,arg2);
//Output is Case2-ERROR: OK





//Case3: Consuming code : Here we calling the myPromise function along with catch() is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.
arg1=function(value) {
  console.log("Case3-WORKED:",value);
}
arg2=function(error){
  console.log("Case3-ERROR:",error);
}

myPromise.then(arg1).catch(arg2);
//Output is Case3-ERROR: OK
// Realtime use case of promise: https://dev.to/jerrycode06/callback-hell-and-how-to-rescue-it-ggj



//Case4: unlike previous cases here we will Returns promise
function runService() {
	return new Promise((resolve, reject) => {
    let x = 0;
      // The producing code (this may take some time)
   if (x == 0) {
     resolve("Case4-WORKED:OK"); //Here myResolve is a function whose function code is passed as an argument to this myPromise function by the function-call defined in next statement of this js file & since the function-call first argument is function code that accepts only one argument-value, here we are passing "OK" as single argument-value.
   }
   else { 
     reject("Error"); //Here myReject is a function whose function code is passed as an argument to this myPromise function by the function-call defined in next statement of this js file & since the function-call first argument is function code that accepts only one argument-value, here we are passing "OK" as single argument-value.
   }

	})
}

console.log(runService());      //This returns: Promise { 'Case4-WORKED:OK' }

//Remember: .then can send value to promise and catch's the return of runService, this is .then purpose everywhere.
runService().then(console.log).catch(console.log); //This returns: Case4-WORKED:OK

//Can also be written as:
runService().then(response=>{console.log("Response:",response)}).catch(error=>{console.log("Error:",error)}); //This returns: Response: Case4-WORKED:OK

//Can also be written as:
async function run() {
  const result = await runService() //Async: Case4-WORKED:OK
  console.log("Async:",result);
}
run().catch(err => console.error(err))