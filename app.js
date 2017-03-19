var express = require('express')
var app = express()
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Muestra la vista con el formulario para log in
app.get('/login', function(req, res){
  res.render('login');
});

app.use('/content', express.static(path.join(__dirname, 'public')));

  var server = app.listen(8087, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('Conectado al puerto 8087')
})
