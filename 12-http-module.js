const http = require('http');
const server = http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end('Welcome!');
  }
  if(req.url==='/about'){
    res.end('Here is some information about our history');
  }
  res.end(`<h1>Oops! Sorry page does not exist</h1>
      <a href="/">Back to home</a>
    `);
});
server.listen(3000);