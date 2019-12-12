var express=require("express");
var cookieparser=require("cookie-parser");
var session=require("express-session");

var app=express();
app.use(cookieparser());
app.use(session(secret));

app.get("/",function(req,res){
    console.log("Test");
    req.session.user="Isaac"
    req.session.pass="Test"
    req.send="Session created"
})
res.send("username: "+req.session.user)
})
app.listen(8000);