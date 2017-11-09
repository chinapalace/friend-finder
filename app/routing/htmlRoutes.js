var path = require("path");
var bodyParser = require('body-parser');

module.exports = function(app) {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

}