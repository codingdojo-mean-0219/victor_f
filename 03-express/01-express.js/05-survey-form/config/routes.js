var survey = require('../controllers/controller');

module.exports = function(app) {
	app.get('/', survey.home);
	app.post('/result', survey.result);
}