// require express
var express = require("express"),
	path = require("path"),
	app = express(),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	app = express();

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app);
app.listen(8000, function() {
 console.log("listening on port 8000");
});