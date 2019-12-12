var express=require("express");
var cookieparser=require("cookie-parser");
var session = require('express-session');

var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
   res.render("index");
});

app.get("/range/:t",function(req,res){
   res.render("range",{'t':req.params.t});
});

app.get("/timestable/:t/:r",function(req,res){
   res.render("timetable",
   {
       't':req.params.t,
       'r':req.params.r
   });
});

app.listen(4003)