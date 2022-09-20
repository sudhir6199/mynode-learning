var myEvent = require('events');
myEmitter = new myEvent.EventEmitter();

myEmitter.on('eventSuccess',() => { console.log("\nThis Event triggered for Success\n") }); //Create event called eventSuccess that will wait for call(listners).
myEmitter.on('eventFail',() => { console.log("\nThis Event triggered for Failure\n") });    //Create event called eventSuccess that will wait for call(listners).

if (1==2) {

    console.log("\nInside Success Condition\n");
    
    myEmitter.emit('eventSuccess');               //Calling event called eventSuccess
}
else{

    console.log("\nInside Fail Condition\n");
    
    myEmitter.emit('eventFail');                  //Calling event eventFail

}

//NOTE: In above example event emitter working more like a function, in next Example2/app.js Event Emitter code in last, we will see realworld example.
