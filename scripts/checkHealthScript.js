const client = require('../client');

client.checkHealth({}, (error, response) => {
  if (error) {
    throw error;
  }
  console.log(response);
});

