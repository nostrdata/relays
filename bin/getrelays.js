#!/usr/bin/env node

// Require the 'https' library 
const https = require('https')

// Set the variable for our relaysUri
const relaysUri = "https://nostr.watch/relays.json"

// Define a function to get a JSON object from a given URL
function getJSON(url) {
  return new Promise((resolve, reject) => {
    // Make an https GET request
    https.get(url, (res) => {
      let body = ''
      // When data is received, add it to the body
      res.on('data', (d) => body += d)
      // When the request ends, parse the json and resolve the promise
      res.on('end', () => resolve(JSON.parse(body)))
      // If an error occurred, reject the promise
      res.on('error', (e) => reject(e))
    })
  })
}

// Call getJSON with our relaysUri and log the JSON response in a pretty format
getJSON(relaysUri)
  .then((data) => {
    var relays = []
    for (var i = 0; i < data.relays.length; i++) {
      var obj = { '@id': data.relays[i], '@type': "Relay" }
      relays.push(obj)
    }
    console.log(JSON.stringify(relays, null, 2))
  })

