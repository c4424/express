// We require/import the HTTP module
const http = require('http')

// =====================================================================

// Then define the ports we want to listen to
const PORTONE = 7000
const PORTTWO = 7500

// =====================================================================

// Create an array of random quotes to choose from
const arrQuotes = ['There is no such thing as a weird human being. It\'s just that some people require more understanding than others.',
  'There are two kinds of people in this world : those who believe there are two kinds of people in this world and those who are smart enough to know better.',
  'Sharks are the criminals of the sea. Dolphins are the outlaws.',
  'The advantage of the emotions is that they lead us astray, and the advantage of science is that it is not emotional.',
  'I can stand brute force, but brute reason is quite unbearable. There is something unfair about its use. It is hitting below the intellect.',
  'Violence is the last refuge of the incompetent.']

// Create a function to return a random quote from the quotes array
function getRandomQuote () {
  let max = arrQuotes.length
  let random = Math.floor(Math.random() * (max - 0)) + 0 // The maximum is exclusive and the minimum is inclusive
  return arrQuotes[random]
}

// We need two different functions to handle requests, one for each server.
function handleRequestOne (request, response) {
  response.end(getRandomQuote())
}

function handleRequestTwo (request, response) {
  response.end(getRandomQuote())
}

// =====================================================================

// Create our servers
const serverOne = http.createServer(handleRequestOne)
const serverTwo = http.createServer(handleRequestTwo)

// =====================================================================

// Starting our servers
serverOne.listen(PORTONE, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log(`Server listening on: http://localhost:${PORTONE}`)
})

serverTwo.listen(PORTTWO, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log(`Server listening on: http://localhost:${PORTTWO}`)
})
