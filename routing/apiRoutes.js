// ===============================================================================
// LOAD DATA
// Linking our routes to a series of "data" sources.

var friend = require("../data/friendsData.js");


// ROUTING

module.exports = function(app) {
  console.log("apiRoutes.js");

//   Number of friend entries
  app.get("/api/friend", function(req, res) {
    res.json(friend);
  });

  
  app.post("/api/friends", function(req, res) {
    //holding the user input data 
    if (userInput.length < 5) {
      userInput.push(req.body);
      res.json(true);
    }
    else {
      userInput.push(req.body);
      res.json(false);
    }
  });

  
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    userInput.length = [];
    

    res.json({ ok: true });
  });
};
