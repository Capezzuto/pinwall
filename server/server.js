var express    = require('express');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var app        = express();
var routes     = require('./routes/routes.js');
var middleware = require('./config/middleware.js');
var path       = require('path');

console.log("In server.js file")

app.use(bodyParser.json());

app.set('port', process.env.PORT ||  8080);
app.use(morgan('dev'));
// app.use(express.static(__dirname + '/../client'));
app.use(express.static('./'));
app.use('/api', routes);
app.use('/*', function(req, res) {
  res.redirect('/');
});
app.use(function(req, res) {
 res.send('404: Page not Found', 404);
});


app.listen(app.get('port'), function() {
    console.log('Server listening on port ', app.get('port'));
});
