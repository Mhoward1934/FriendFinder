express = require("express");
//var express = require("express");
var router = express.Router();
var data = require("./apiRoutes");

router.get("/friends", function(req,res){
    res.status(200).json(data);
});

router.post("/friends", function(req,res){
    data.push(req.body);
    res.status(200).json({msg: "Your profile was added successfully!"});
});

module.exports = router;