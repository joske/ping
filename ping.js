var player = require('play-sound')(opts = {})
const http = require('http');

const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  player.play('ping.mp3', function(err){
    if (err) throw err
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
