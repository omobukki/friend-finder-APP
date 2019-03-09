// ===============================================================================
// LOAD DATA
// Linking our routes to a series of "data" sources.

var friends = require("../data/friends.js");
// ROUTING

module.exports = function(app) {
  console.log("apiRoutes.js");

//   Number of friend entries
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  
  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name:"",
      photo:"",
    }
    //define newFriend
    var newFriend = req.body
    var smallestDifference = Infinity;

    var difference = 0;
    //loop through all the friends to calculate the difference
    friends.foreach(function(friend){
      difference = 0;
      //get difference between newFriend and friend for all scores
      for(var i=0; i < friend.scores.length; i++){
        var newFriendScore = newFriend.scores[i];
        var friendScore =friend.scores[i];
        //add difference of these score to the difference variable
        difference += Math.abs(parseInt(newFriendScore) - parseInt(friendScore));
      }

      //check if less than smallestDifference
      if(difference <= smallestDifference){
        //current friend is the new best match
        bestMatch = friend
        //current difference is the smallestDifference
        smallestDifference = difference
      }

      
    });

    //update friends array
    friends.push(newFriend);

    //return best match to client
    res.json(bestMatch);
  });

};
