const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
	app.post('/api/surveys', requireLogin, (req, res) => {
		res.send({ message: 'survey cration route' });
	});
};
