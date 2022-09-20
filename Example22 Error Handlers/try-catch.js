//Example 1 : simpleone below will fail because a value is not defined.
try {
       a+1
       console.log("INFO: try block passed.")
}
catch{
        console.log("ERROR: try block failed.")
}

//Example2: printing error below will fail because a value is not defined.

try {
    a+1
    console.log("INFO: try block passed.")
}
catch(error){
     console.log("ERROR: try block failed:",error)
}

//Instead of default "error" message you can use custom "error" message using "throw" in try block.