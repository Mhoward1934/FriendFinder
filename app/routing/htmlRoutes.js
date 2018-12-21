var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function(req, res){
    res.status(200).sendFile(path.join(_dirname, "../app/public/home.html"));
});

router.get("/survey", function(req, res){
    res.status(200).sendFile(path.join(__dirname, "../app/public/survey.html"));
});

module.exports = router;