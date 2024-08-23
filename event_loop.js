const http = require("http");

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.write("Welcome to de server")
    return res.end()
}
if(req.url === '/about'){
   //blocking code
  /*  for(let i = 0; i <1000; i++){
    console.log(Math.random() * i)
   } */
    return res.end("About...")
}
res.end('not found')
  })

  server.listen(3000)
  console.log("server on port 3000")