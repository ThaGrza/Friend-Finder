// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Creates express server
var app = express();

// Sets initial port
var PORT = process.env.PORT || 8080;

// Sets up data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});