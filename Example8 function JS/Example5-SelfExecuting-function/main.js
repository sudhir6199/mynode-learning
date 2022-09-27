//Example1:  parameter is passed from inside the function parenthesis.
(function (platform) {
    console.log("Func 1: ", platform);
})('This string parameter is outside the function parenthesis.');

//Example2: parameter can be passed from inside the function parenthesis.
(function (platform) {
    console.log("Func 2: ", platform);
}('This string parameter is inside the function parenthesis.'));