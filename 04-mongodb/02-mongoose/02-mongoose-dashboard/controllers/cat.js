var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Cat = require('../models/cat')
module.exports = {
    showAll: function(req, res) {
        Cat.find({}, function(err, cats){
            if (err) {
                console.log(err)
                res.render('index')
            }
            if (cats) {
                res.render('index', {cats: cats})
            }
        });
    },
    new: function(req, res){
        res.render('new')
    },
    create: function(req, res){
        var puppy = new Cat({name: req.body.name, description: req.body.description});
        puppy.save(function(err){
            if (err) {
                res.render('new', {errors: puppy.errors})
            } else {
                console.log("you have successfully your cat")
                res.redirect('/')
            }
        })
    },
    view: function(req, res){
      Cat.findOne({_id:req.params.id}, function(err, cats){
            if (err) {
                console.log(err)
                res.render('index')
            }
            if (cats) {
                res.render('view', {cats: cats})
            }
        })
    },
    edit: function(req, res){
        Cat.findOne({_id:req.params.id}, function(err, cats){
            if (err) {
                console.log(err)
                res.render('index')
            }
            if (cats) {
                res.render('edit', {cats: cats})
            }
        })
    },
    update: function(req, res){
        Cat.update({_id:req.params.id}, { $set: {name: req.body.name, description: req.body.description}}, function(err){
            console.log(err);
        })
        res.redirect('/')
    },
    destroy: function(req, res){
        Cat.remove({_id: req.params.id}, function(err){
            console.log(err);
        })
        res.redirect('/')
    },
}
