// Do any work in parallel to main
// event loop or main process
console.log('Child Process Starts:',new Date())
setTimeout(() => {
	console.log('Child Data processed:',new Date())
}, 5000)