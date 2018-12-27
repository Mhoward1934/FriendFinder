var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));
// app.use("./app/routing/apiRoutes")(app);
// app.use("./app/routing/htmlRoutes")(app);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, + '/../public/home.html'));
});

app.listen(PORT, function () {
    console.log("App listening on PORT: http://localhost:" + PORT);
});

