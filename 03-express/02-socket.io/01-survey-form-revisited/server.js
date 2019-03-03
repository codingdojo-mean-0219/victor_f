var express = require("express");
var path = require("path");
var session = require('express-session');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))


app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(1337);
var io = require('socket.io')(server);

io.on('connection', function (socket) { 
  
    socket.on('posting_form', function (data) { 
        console.log(data.msg); 
        socket.emit('updated_message', { msg: data }); 
        socket.emit('random_number', { msg: Math.floor(Math.random() * 101) + 1 }); 
    });

});

require('./config/routes.js')(app);

app.listen(8000, function() {
    console.log(`listening on port 8000`);
});