const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to de server");
    return res.end();
  }

  if (req.url === "/about") {
    res.write("Acerda de");
    return res.end();
  }

  res.write(`
    <h1>Not Found</h1>
    <p>pagina no encotrada</p>
    <a href = "/"> Volver a la pagina principal</a>
    `);
  res.end();
});
server.listen(3000);

console.log("ejecutando en puerto 3000");
