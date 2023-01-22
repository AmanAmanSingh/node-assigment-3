const fs = require("fs/promises");
const http = require("http");

async function creatingFile() {
    try {
        await fs.writeFile("index.html", `<h1>Hello World</h1>`);
    } catch (err) {
        console.log(err)
    }
}

async function updatingFile() {
    try {
        await fs.appendFile("index.html", `\n<P>This is Aman</p>`)
    } catch (err) {
        console.log(err)
    }
}

async function readingFile() {
    try {
        const data = await fs.readFile("index.html", "utf-8");
        return data;
    } catch (err) {
        console.log(err)
    }
}

const startServer = async () => {
    await creatingFile();
    await updatingFile();

    const fileData = await readingFile();
    const server = http.createServer((req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(fileData);
        res.end();
    })
    server.listen(3001, () => { console.log("live on port 3001") })
}
startServer();