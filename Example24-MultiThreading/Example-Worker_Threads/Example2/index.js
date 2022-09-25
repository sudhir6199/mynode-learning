
const { Worker } = require('worker_threads')

function runService(workerData) {
	return new Promise((resolve, reject) => {
		const worker = new Worker('./worker.js', { workerData });
		worker.on('message', resolve);
		worker.on('error', reject);
		worker.on('exit', (code) => {
			if (code !== 0)
				reject(new Error(`Stopped the Worker Thread with the exit code: ${code}`));
		})
	})
}


//Below are 4 types of caller functions:

//Case1: Can be written 
async function run() {
 	const result = await runService('Case1') //Technical Articles on GeeksForGeeks
 	console.log(result);
}

run().catch(err => console.error(err)) //{ fileName: 'GeeksForGeeks', status: 'Done' }


//Case2: Can also be written
runService('Case2').then(console.log).catch(console.log);


//Case3: Can also be written as
//Remember: .then can send value to promise and catch's the return of runService, this is .then purpose everywhere.
runService('Case3')
.then(console.log)   //{ fileName: 'GeeksForGeeks', status: 'Done' } 
.catch(console.log); 


//Case4: Can also be written as
//Remember: .then can send value to promise and catch's the return of runService, this is .then purpose everywhere.
runService('Case4')
.then(response => {console.log("Result:", response)})   //Result: { fileName: 'GeeksForGeeks', status: 'Done' }
.catch(error => {console.log("Error:",error)});



