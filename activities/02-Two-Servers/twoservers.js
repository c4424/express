// Require/import the HTTP module
const http = require('http')
// Define a port to listen for incoming requests
const PORT1 = 8000
// create a funciton to handle requests and responses
function handleRequest (request, response) {
    response.end(`welcome to port 8000 ${request.url}`)
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server1 = http.createServer(handleRequest)

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function () {
    // Log (server-side) when our server has started
    console.log(`Server/port 8000 listening on: http://localhost:${PORT1}`)
  })



//-------------------------------------------------------------------------

// Define a port to listen for incoming requests
const PORT2 = 7500
// create a funciton to handle requests and responses
function useRequest (request, response) {
    response.end(`welcome to port 7500 ${request.url}`)
}

// creates server
const server2 = http.createServer(useRequest)

//starts server so it can listen to clients request
server2.listen(PORT2, function() {
    console.log(`Server/port 7500 listening on: http://localhost:${PORT2}`)

})
