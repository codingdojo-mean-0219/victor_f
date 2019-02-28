var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get("/cars", (request, response) => {
    var cars_array =
    ["1.jpg","2.jpg","3.jpg"];
    response.render('cars', {cars: cars_array});
})

app.get("/cats", (request, response) => {
    var cats_array = 
    ['cat1.jpg','cat2.jpg','cat3.jpg'];
    response.render('cats', {cats: cats_array});
})

app.get("/cars/new", (request, response) => {
    response.render('newcar');
})

app.listen(8000, () => {
  console.log("listening on port 8000");
});