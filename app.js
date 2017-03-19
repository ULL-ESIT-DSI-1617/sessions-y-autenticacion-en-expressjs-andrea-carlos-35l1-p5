var express = require('express')
var app = express()
var path = require('path');

app.use('/content', express.static(path.join(__dirname, 'public')));

  var server = app.listen(8080, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('Conectado al puerto 8080')
})
