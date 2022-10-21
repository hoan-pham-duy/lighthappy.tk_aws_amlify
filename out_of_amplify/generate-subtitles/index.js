
// req.query
var express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');
var mainRoute = require('./routes/main.route');

var port = 3000;

var app = express();


app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.use('/', mainRoute);
app.use('/users', userRoute);

// Routes
app.get('/', function(req, res) {
  res.render('index');
});




app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
