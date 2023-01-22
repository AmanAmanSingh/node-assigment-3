const fs = require("fs")
const http = require("http");
const { type } = require("os");


const server = http.createServer((req, res) => {

    fs.readFile("index.html", "utf-8", (err, data) => {
        res.end(data)
    })

})
server.listen(5000, () => console.log("srver is up to port 5000"))