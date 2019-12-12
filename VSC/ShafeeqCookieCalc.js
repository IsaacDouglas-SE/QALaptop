var express=require("express")
var app=express()

app.get("/", function(req,res){
res.writeHead(200, {'Content-type':'text/html'})
    for(var i=1;i<=10;i++){
        res.write(`<a href='http://localhost:8000/1'>${i}</a>`)
        res.write("<BR>");
    }
    res.end();
})
//extra section
app.get("/1", function(req,res){
    res.writeHead(200, {'Content-type':'text/html'})
        for(var i=10;i<=1000;i+=10){
            res.write(`<a href='http://localhost:8000/2'>${i}</a>`)
            res.write("<BR>");
        }
        res.end();
    })
    //extra section
app.get("/2", function(req,res){
    res.writeHead(200, {'Content-type':'text/html'})
        for(var i=20;i<=1000;i+=10){
            res.write(`<a href='http://localhost:8000/generateTimesTable/${i}'>${i}</a>`)
            res.write("<BR>");
        }
        res.end();
    })
//section 2
function TimesTable(T,response){
    response.writeHead(200, {'Content-type':'text/html'})
    response.write("<b><u>Times Table of "+T+" </u></b>")
    response.write("<br>");
    for(var i=1;i<=10;i++){
        response.write(T+"x"+i+"="+(i*T));
        response.write("<br>");
    }
    // response.end();
}
//section 3
app.get("/generateTimesTable/:T", function(req,res){
    var Table=parseInt(req.params.T)
    TimesTable(Table,res)
    res.end();
})

app.listen(8000)