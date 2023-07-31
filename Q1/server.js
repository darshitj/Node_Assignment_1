const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url == "/process" && req.method=="GET")
    {
        var path = "./index.html";
        fs.readFile(path, (err, data) => {
            if(err)
            {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 page not found...");
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

    if(req.url == "/process" && req.method=="POST")
    {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.end(body);
        });
    }
});

server.listen(8000,()=>{
    console.log('Server running on 8000 port');
});
