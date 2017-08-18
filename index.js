var http  = require('http')
var timer = require('./datetime')
var html  = require('./html')

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
		res.write(String(html.bg("Hello--World!!")))
    res.end()
})

server.listen(8080)
