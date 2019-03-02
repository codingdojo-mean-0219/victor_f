const express = require("express");
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));

app.get('/', (request, response) => {
    response.render('index');
})

app.post('/result', (request, response) => {
    response.render('result', {result: request.body});
})

app.get('/planets/:page', function(req, res){
	
	var page = req.params.page != 0 ? `https://swapi.co/api/planets/?page=${req.params.page}` : 'https://swapi.co/api/planets/';

    axios.get(page)
    .then(data => { 
        res.json(data.data);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});

app.get('/people/:page', function(req, res){
	
	var page = req.params.page != 0 ? `https://swapi.co/api/people/?page=${req.params.page}` : 'https://swapi.co/api/people/';

    axios.get(page)
    .then(data => { 

        res.json(data.data);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});



app.listen(8000, () => {
  console.log("listening on port 8000");
});