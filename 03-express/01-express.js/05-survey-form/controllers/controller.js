module.exports = {

	home: function(req,res){
		res.render("index");
	},

	result: function(req,res){
		var x= req.body;
		res.render('result',{x} );
		console.log(x);
	},
	
}