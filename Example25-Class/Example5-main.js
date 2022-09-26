const worker = require('./Example5-unnamed-class.js');

const Worker = new worker('This is UnNamed Class');
console.log(Worker.returnName());