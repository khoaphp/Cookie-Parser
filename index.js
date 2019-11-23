var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.listen(3000);

//cookie-parser
var cookieParser = require('cookie-parser');
app.use(cookieParser());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/check", function(req, res){

    if(typeof req.cookies.DEM != "undefined"){
        console.log(req.cookies.DEM);
    }else{
        console.log("Chua ton tai!");
    }

    res.end();
});