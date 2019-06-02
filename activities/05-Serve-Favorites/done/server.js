// Require dependencies
const http = require('http')
const fs = require('fs')
const path = require('path')

// Set our port to 8080
const PORT = 8080

const server = http.createServer(handleRequest)

function handleRequest (req, res) {
  // Capture the url the request is made to
  const urlPath = req.url

  // When we visit different urls, read and respond with different files
  switch (urlPath) {
    case '/food':
      return fs.readFile(path.join(__dirname, '/food.html'), function (err, data) {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      })

    case '/movies':
      return fs.readFile(path.join(__dirname, '/movies.html'), function (err, data) {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      })

    case '/vacations':
      return fs.readFile(path.join(__dirname, '/vacations.html'), function (err, data) {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      })

    // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(path.join(__dirname, '/index.html'), function (err, data) {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      })
  }
}

// Starts our server.
server.listen(PORT, function () {
  console.log(`Server is listening on PORT: ${PORT}`)
})
