var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get(['/cats','/:cat_id'], (request, response) => {
    const cats_array = [
        {name: 'Jimmy', picture: 'cat1.jpg',age: 9, food:"cookies", info:"loves to hunt mice"},
        {name: 'Lola', picture: 'cat2.jpg', age: 11,food:"Ruffles", info:"loves to sleep backwards"},
        {name: 'Chula', picture: 'cat3.jpg', age: 3, food:"Tacos", info:"loves to love"},
    ];
    const cat_id = request.params.cat_id;
    cat_id == null ? response.render('cats', {cats: cats_array}) : response.render('details', {cat: cats_array.find( (c) => c.name == cat_id)});
})


app.listen(8000, () => {
  console.log("listening on port 8000");
});