var request = require('request-promise');

request('https://localhost.laserform.co.uk/version')
  .then(function(body) {
    console.log(body);
  })
  .then(function() {
    console.log("All Tests Passed!");
  });
