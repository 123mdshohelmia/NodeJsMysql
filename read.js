const fs = require('fs')
const http = require('http')
const server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.readFile("index.html",function(error,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
})
server.listen(8080);
console.log("Server is run");