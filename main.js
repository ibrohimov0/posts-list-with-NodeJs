const http = require("http")
const url = require("url")
const fs = require("fs")
const CreateList = require("./posts")

const Data  = fs.readFileSync("./back.json", "utf-8", (err, data) => {
    if(err) throw err
    return data
})

const Home = fs.readFileSync("./index.html", "utf-8", (err,data) =>{
    if(err) throw err
    return data
})
const a = JSON.parse(Data)
http.createServer(async function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    await res.write(CreateList(a))
    res.end(Home)
}).listen(1111)