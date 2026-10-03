import http from 'http'
console.log(process.argv[2])

const server = http.createServer((req, res)=>{

    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
    res.end(`{"clave": "valor"}`)
})

server.listen(3500)
