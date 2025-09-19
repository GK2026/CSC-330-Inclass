const http = require('http');
const fs = require('fs');
const url = require('url');

// callback function
const serveStatic = function (req, res) {
    let fileName = '.' + url.parse(req.url).pathname; // line 6 already given

    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Error 404: resource not found');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'image/jpg' }); // simplest content type
            res.write(data); // send file contents
            res.end();
        }
    });
};

const myserver = http.createServer(serveStatic);

myserver.listen(80, function () {
    console.log("Listening on port 80");
});
