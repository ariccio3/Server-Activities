// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTONE = 7000;

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You smell good");
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORTONE, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTONE);

});


// Here we require/import the HTTP module
// var http = require("http");

// Here we define a port to listen to
var PORTTWO = 7500;

// Here we create a generic function to handle requests and responses
function handleRequests(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You smell bad");
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
server = http.createServer(handleRequests);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORTTWO, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTTWO);

});