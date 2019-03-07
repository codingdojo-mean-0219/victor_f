var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var cats = require('../controllers/cat.js')

module.exports = function(app) {
    app.get('/', function(req, res){
        cats.showAll(req, res)

    });
    app.get('/cats/new', function(req, res){
        cats.new(req, res)
    });

    app.get('/cats/:id', function(req, res){
        cats.view(req, res)
    })
    app.post('/cats', function(req, res){
        cats.create(req, res)
    });

    app.get('/cats/edit/:id', function(req, res){
        cats.edit(req, res)
    });

    app.post('/cats/:id', function(req, res){
        cats.update(req, res)
    })

    app.post('/cats/destroy/:id', function(req, res){
        cats.destroy(req, res)
    })
}