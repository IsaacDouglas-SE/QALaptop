// localhost:8000/Show
// npm install cookie-parser

var express=require("express");
var cookieparser=require("cookie-parser");

var app=express();

app.use(cookieparser())
    app.get("/",function(req,res){
        res.cookie("color","blue")
        res.send("hello my friend");
    })
    app.get("/show",function(req,res){
        var color=req.cookies.color;
        res.send(color);
    })
    app.listen(2004)