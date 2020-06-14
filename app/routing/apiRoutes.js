var friends = require('../data/friends');

// Routing 
module.exports = function (app) {
    // The app.get request handles
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    // The app.post request handles
    app.post('/api/friends', function (req, res) {
        
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // Result of the user's survey POST and parse it
        var userData = req.body;
        var userScores = userData.scores;
        // Parses name and photo of user
        var userName = userData.name;
        var userPhoto = userData.photo;

        var totalDifference = 0;

        //loops through array to get scores
        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            //Calculates total differences between answers
            for (var j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend. 
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // The push method use to save user's data to the database
        friends.push(userData);

        res.json(bestMatch);
    });
};