const worker = require('./Example6-named-calss.js');

const Worker = new worker('This is NamedClass');
console.log(Worker.websiteName());