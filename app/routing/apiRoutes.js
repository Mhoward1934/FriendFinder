//express = require("express");
//var express = require("express");
//var router = express.Router();
var userData = require("../data/friends");

module.exports = function (app) {
    app.get("api/friends", function (req, res) {
        res.json(userData);
    });

    app.post("api/friends", function (req, res) {
        data.push(req.body);
        res.status(200).json({ msg: "Your profile was added successfully!" });

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var newData = req.body;
        var newDataScore = newData.score;
        // the total difference starts off at 0 
        var totalDifference = 0;

        //loop through all of question values and sum total their subtracted absolute values
        for (var j = 0; j < userData[i].scores[j]; j++) {
            // this adds the numerical answers of each friend to the total difference; then uses the absolute value to determine the difference between the two (absolute value is used so that 5-3 and 3-5 both equal 2)
            totalDifference += Math.abs(parseInt(newDataScore[j]) - parseInt(userData[i].scores[j]));
        }

        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.friendDifference) {

            // Reset the bestMatch to be the new friend.
            bestMatch.name = userData[i].name;
            bestMatch.photo = userData[i].photo;
            bestMatch.friendDifference = totalDifference;
            $("#results-modal").modal("toggle");
        }
        userData.push(newData);
    });


};
