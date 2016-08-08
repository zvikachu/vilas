//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=3000;
const IP = "ec2-52-32-214-223.us-west-2.compute.amazonaws.com";

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT,IP);
console.log("Server listening on" + PORT);