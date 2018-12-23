//var express = require("express");
//var router = express.Router();
var path = require("path");
//var app = express();

module.exports = function(app){
    app.get('/', function (req, res) {
        res.sendFile(path.join(_dirname, + '/../public/home.html'));
    });
    
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, + '/../public/survey.html'));
    });
};

