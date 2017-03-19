var express = require('express')
var app = express()
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Muestra la vista con el formulario para log in
app.get('/login', function(req, res){
  res.render('login');
});

//Obtiene la respuesta del formulario y comprueba si es correcto
app.post('/login', function(req, res){
    if (!req.body.username || !req.body.password) {
      console.log('login failed');
        res.render('noautentificado', { message: 'No deje ningún campo vacio' } );
    } else if(req.body.username in users &&
              bcrypt.compareSync(req.body.password, users[req.body.username])) {
      req.session.user = req.body.username;
      req.session.admin = true;
      console.log('registrado');
      res.render('autentificado', { message: 'Estas autentificado, accede al contenido' } );
    } else {
      console.log('login failed');
      res.render('noautentificado', { message: 'Login Failed' } );
    }
  });

app.use('/content', express.static(path.join(__dirname, 'public')));

  var server = app.listen(8087, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('Conectado al puerto 8087')
})
