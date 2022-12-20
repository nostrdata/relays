#!/usr/bin/env node

const relaysUri = "https://nostr.watch/relays.json"

const https = require('https');

function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = '';
      res.on('data', (d) => body += d);
      res.on('end', () => resolve(JSON.parse(body)));
      res.on('error', (e) => reject(e));
    });
  });
}

getJSON(relaysUri)
  .then((data) => console.log(JSON.stringify(data, null, 2)));

