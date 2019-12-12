// npm install node express (inside cmd line)
// run URL in postman to test POST method
// create server, node express will do the rest

var express=require("express")
var app=express()

app.get("/process", function(req,res){
    res.send("reached hello");
});
app.post("/process", function(req,res){
    res.send("reached bye");
});
app.listen(2000);