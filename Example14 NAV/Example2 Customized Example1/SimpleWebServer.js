// This example to learn how to give error response
var http=require('http');
var fs=require('fs');
var url=require('url');
const path = require('path');
const myport=48080

http.createServer(function (req,res) {

          var url_parse = url.parse(req.url, true);
          console.log("Sudhir PARSED URL:",url_parse);
          console.log("Sudhir Extracted PATH:",url_parse.pathname);

          var filename = "." + url_parse.pathname
          if (filename=="./")
          {
               filename="./Home";
          }
          filename=filename + ".html" //Note: Here we didnt use var prefix.
          

          console.log("Sudhir PATH to use:",filename);

          fs.readFile(filename,function(err, data){
               if (err)
               {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end("404 NOT Found, Please try HelloWorld.html as path.");
               }
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               res.write("Note: You are on " + filename + " Page.");
               return res.end();
          })
     }
).listen(myport);

console.log("server listening on port:", myport)  //Intresting fact is this will run without waiting for previous one complete.