// Module imports to be used in the operations
var http = require('http')
var fs = require('fs')
var stm = "<p style='background-color:red'>New Stuff</p>"
var uc  = require('upper-case')

// Below is the piece of code meant to create, write into,
// and delete a specific file if it exists in the local directory
fs.writeFile('mynewfile.html', stm, function(error){
	// Error message if there is any
	error ? console.log("There is an error") : console.log("No errors at all.")

	// Server to output something through the localhost:8080 Port
	server = http.createServer(function(req, res){
		fs.readFile('mynewfile.html', function(error, data){
			res.writeHead(200, {"Content-Type" : "text/html"})
			res.write(uc(String(data)))
			res.end()
		})

		// Piece of code to delete the specified file if it exists
		fs.unlink("mynewfile.txt", function(error){
			error ? console.log("Cannot find the specified file") : console.log("file deleted! Yay!")
		})
	})

  server.listen(8080)

})
