//load hhtp module
const http = require('http');
//create a HTTP server
// a server is an object that extendeds EventEmitter!
//we can therefore register an event handler
//here we use an anonymous function with req, resp
const server = http.createServer((request, response) => {
    //check if the route is /
    if (request.url === '/') {
        response.write("Hello  from node.js nodemon!");
        response.end();
    }
});
//tell the server to listen on port 55000
server.listen(55000);
console.log("Server started and listening on port 55000");