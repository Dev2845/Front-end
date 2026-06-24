const http = require("http")

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)
    res.write("welcome")
    res.end();
})

server.listen(4000);
console.log("hello")
