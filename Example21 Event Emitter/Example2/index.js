const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 58080;

// Load all static html files in the directory, here index.html file open as default at http://localhost:58080/ but to load html like Resume.html we should call complete http://localhost:58080/Resume.html
app.use(express.static(path.join(__dirname)));

// Configure Port
var server_object=app.listen(PORT, () => console.log("Server listening on port " + PORT));

//Possible incomming Events
var incomming_events=server_object.eventNames()
console.log("\nserver_object:",incomming_events);

//On Event
var i=0
server_object.on('connection',()=>{
    i=i+1
    console.log("\nEventReport: A client Connected:",i);
});

//Using if condition instead of Event
function dummy_func(j){
    console.log("\nConditionReport: A client Connected:",j,"\n");
}

var j=0
if (incomming_events.includes('connection')){
    dummy_func(j)
    j=j+1
}

