const fs = require("fs");

//Example1

// This file dosent exists
const file = "file.txt";

// This is a  Callback function passed as an argument to next fs.readFile.
// fs module syntax is fs.readFile( filename, encoding, callback_function )   https://www.geeksforgeeks.org/node-js-fs-readfile-method/
// Since fs module support callback function, meaning it will execute the passed callbackfunction.
// The err, data arguments of callback functions will be passed by fs module internally!
const ErrorFirstCallback = (err, data) => {
     if (err) {
	            return console.log("\n\n\nThe Callback function found ERROR:\n\n", err , "\n");
              }

     console.log("\nThe Callback function found message:Function successfully executed\n");
     console.log(data.toString());
};

//In below above declared Callback function passed as an argument.
// fs module syntax is fs.readFile( filename, encoding, callback_function )   https://www.geeksforgeeks.org/node-js-fs-readfile-method/
// Since fs module support callback function, meaning it will execute the passed callbackfunction.
// The reason for providing callbackfunction for inbuilt or 3rd party modules is to allow user to cutomize errors like above.
fs.readFile(file, ErrorFirstCallback);


//Example2
// This file dosent exists
const file2 = "file2.txt";
fs.readFile(file2, ErrorFirstCallback);
