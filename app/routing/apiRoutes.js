//express = require("express");
//var express = require("express");
//var router = express.Router();
var data = require("./data/friends.js");

module.exports = function (app) {
    app.get("/friends", function (req, res) {
        res.status(200).json(data);
    });

    app.post("/friends", function (req, res) {
        data.push(req.body);
        res.status(200).json({ msg: "Your profile was added successfully!" });

        // the total difference starts off at 0 
        var totalDifference = 0;
        // all differences is an empty array into which the scores of each potential friend the user is being compared to will go here
        var allDifferences = [];

        //loop through all of the stored friends 
        for (var i = 0; i < (data.length - 1); i++) {

            //loop through all of question values and sum total their subtracted absolute values
            for (var j = 0; j < 10; j++) {
                // this adds the numerical answers of each friend to the total difference; then uses the absolute value to determine the difference between the two (absolute value is used so that 5-3 and 3-5 both equal 2)
                totalDifference += Math.abs(data[i].scores[j] - newData.scores[j]);
            }

            // each total difference, for each potential friend, is pushed into the allDifferences array 
            allDifferences.push(totalDifference);
            // total difference is reset back to zero
            totalDifference = 0;
        }

        //best match will give the smallest values 
        var bestMatch = data[allDifferences.indexOf(Math.min.apply(null, allDifferences))];

        res.send(bestMatch);
        console.log(bestMatch);
    });
};