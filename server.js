var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var htmlRoute = require("./app/routing/htmlRoutes.js");
var apiRoute = require("./app/routing/apiRoutes.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apiRoute(app);
htmlRoute(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});