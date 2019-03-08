DEPENDENCIES
// Getting the dependencies path package to get the correct file path for html
var path = require("path");

// ROUTING

module.exports = function(app) {

  // GET Requests For HTML

  app.get("/friendFinder", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
