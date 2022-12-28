var buf = new Buffer('Hello','utf8');
console.log(buf)
//Output: <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); //Converting the binary back to string.
//Output: Hello
console.log(buf.toJSON());    // Converting to JSON
//Output: { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
//Here data array is Unicode character set in base10 notation.
console.log(buf[2]);
//Output: 108
//this 108 is the 2nd index of the array of unicode character set.
buf.write('wo');
console.log(buf.toString());
//Output: wollo
//Here "He" in "Hello" replaced with "wo" and so output is "wollo".