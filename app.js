const http = require('http');

http.createServer(function (req, res) {
	res.write("Purcica mea este cea mai adorabila!");
	res.end();

}).listen(3000);
console.log("Server started on port 3000");
