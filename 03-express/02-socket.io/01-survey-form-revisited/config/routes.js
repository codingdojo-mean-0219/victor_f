var controller = require('../controllers/controller');

module.exports = function(app){
	app.get('/', controller.index_func);
	app.post('/result', controller.submit_func);
	app.get('/result', controller.data_func);
	app.get('/back', controller.back_func)
}