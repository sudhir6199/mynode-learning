var http=require('http');
var fs=require('fs');
var url=require('url');
const myport=48080

http.createServer(function (req,res) {

          var url_parse = url.parse(req.url, true); //This is the one we are learning in this example
          console.log(url_parse);                   //This parse the complete URLS
          console.log("Sudhir The Incoming Request Path:",url_parse.path) //This is to parse specific attribute

          fs.readFile('HelloWorld.html',function(err, data){
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               res.write(req.url + " is the URL Path.");
               console.log("Sudhir Captured Request Path:" + req.url);
               res.end();
          })

     }
).listen(myport);

console.log("server listening on port:", myport)  //Intresting fact is this will run without waiting for previous one complete.