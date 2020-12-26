const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
	app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
		res.send({ message: 'survey cration route' });
	});
};
