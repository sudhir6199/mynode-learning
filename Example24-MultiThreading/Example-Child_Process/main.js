const { fork } = require('child_process');

// Fork another process
const child_process = fork('./secondThread.js');

// Data we may need to send to the child process
const data = {}

console.log('Before process:',new Date())

// Send the data to forked process
child_process.send({ data }, function(){
	console.log('Sending data to Child:',new Date())
});

// Listen to forked process
child_process.on('close', (result) => {
	console.log('Child process terminated and returned:',new Date());
});

console.log('After process:',new Date());
