const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer(function (request, response) {
    const parsedUrl = url.parse(request.url)
    
    if(parsedUrl.pathname=== '/favicon.ico') {
        response.writeHead(200)
        response.end()
        return
    }
    console.log(parsedUrl.pathname)
    if (parsedUrl.pathname === '/game') {
        
    }
    if (parsedUrl.pathname === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(response)
    }
}).listen(3000)