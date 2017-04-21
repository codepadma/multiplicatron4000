const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(request, response) {
  const path = url.parse(request.url).pathname;
  let filePath = `./client/${path}`;
  fs.stat(filePath, (err, stats) => {
  	if(!err && stats.isDirectory()) {
  	  filePath += '/index.html';
  	}

  	fs.readFile(filePath, (err, data) => {
  	  if (err) {
        if (err.code === 'ENOENT') {
          response.statusCode = 404;
          response.end(`Resource does not exist: "${path}"`);
        } else {
          response.statusCode = 500;
          response.end(`Server error: "${err}"`);
        }
  	  } else {
  	  	response.end(data.toString('UTF-8'));
  	  }
  	}); 
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}...`);
});