var http=require('http');

http.createServer(function (req,res) 
     {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(req.url); //Prints URL path.
          res.write(" is the URL Path.")
          res.end();
     }
).listen(48080);