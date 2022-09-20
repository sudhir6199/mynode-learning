var http=require('http');
var fs=require('fs');
const myport= process.env.PORT || 58080;

http.createServer(function (req,res) {
          fs.readFile('HelloWorld.html',function(err, data){
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               res.end();
          })
     }
).listen(myport);

console.log("server listening on port:", myport)  //Intresting fact is this will run without waiting for previous one complete.