module.exports = {

	counting: function(req, res){
	 	if (req.session.count)
			req.session.count++;
		else
			req.session.count = 1;
		res.render("index", {session: req.session});
	},
	two: function(req, res){
		req.session.count +=1;
		res.redirect('/');
	},
	reset: function(req, res){
		req.session.count = 0;
		res.redirect('/');
	},
}