const axios = require('axios');

axios.get('http://localhost:8080')
  .then(response => {
    console.log(response.data); // Should print "Hello from Microservice!"
  })
  .catch(error => {
    console.log('Error:', error);
  });
