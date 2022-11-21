var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://hackerrank.wisesight.dev?name=Nazifa Tucker&page=1',
  'headers': {
    'X-Api-Key': '7sUcpSWmNaUujQU0oNlfTQ'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
