var counter = require('../controllers/controller');

module.exports = function(app) {
  // /home is the url we are looking for and our_controller.home_function is
  // the function that will run when the server receives a get request.
  	app.get('/', counter.counting);
	app.get('/count', counter.two);
	app.get('/reset', counter.reset);
}