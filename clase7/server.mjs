import http from 'http';

const server = http.createServer((req, res) => {
    //Responder a las solicitudes http y procesarlas
  

  if (req.method !== "GET") {
    res.writeHead(405,  { "Content-Type": "text/plain; charset=utf-8" } )
    res.end("Metodo no permitido")
    return
  }
  
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hola desde Node");
});

server.listen(3500, () => {
  console.log("Servidor en http://localhost:3500");
});