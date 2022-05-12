const http = require('http')
const { hostname } = require('os')
const hostnam = 'localhost'
const port = 3333

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World")
})

server.listen(port, hostname, () => {
    console.log("SERVIDOR RODANDO")
})
