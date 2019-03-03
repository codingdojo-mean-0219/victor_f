module.exports = {
    index_func: function(req, res){
        res.render('index', {session: req.session});
    },
    submit_func: function(req, res){
        req.session.name = req.body.name;
        req.session.location = req.body.location;
        req.session.language = req.body.language;
        req.session.comment = req.body.comment;
        res.redirect('/result');
    },
    data_func: function(req, res){
        res.render('result', req.session);
    },
    back_func: function(req, res){
        req.session.destroy();
        res.redirect('/');
    }
}