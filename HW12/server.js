const http = require("http");
const static = require("node-static");
const file = new static.Server(".", { headers: { "Access-Control-Allow-Origin": "*" } });

http.createServer(function (request, response) {
    if (request.url == "/books.json") {
        file.serve(request, response);
    } else {
        // Send the HTTP header with HTTP Status: 200=OK, Content Type: text/plain
        response.writeHead(200, {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*",
        });
        response.write(`Your vote is accepted: ${new Date()}`);
        response.end();
    }
}).listen(5000);
