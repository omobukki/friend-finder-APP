// DEPENDENCIES for this App

var express = require('express');
var bodyParser = require('body-parser');
//var path = require('path');

// EXPRESS CONFIGURATION
// this is a express server
var app = express();
var PORT = process.env.PORT || 3000;
// Express handle hold data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening... on PORT: " + PORT);
  });
  