var express = require('express');
var expressHbs = require('express-handlebars');
var app = express();
var server;

// Handlebars Engine Setup
app.engine('hbs', expressHbs({
  extname: 'hbs',
  defaultLayout: 'main.hbs'
}));

app.set('view engine', 'hbs');

// Routes
app.get('/', function(req, res) {
  res.render('index');
});

// Static files serve
app.use(express.static('public'));

// Run the server
server = app.listen(process.env.PORT || 3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App running at http://%s:%s', host, port);
});
