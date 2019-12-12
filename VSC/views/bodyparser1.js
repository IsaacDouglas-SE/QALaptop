var express=require("express")
var app=express();
var bodyparser=require("body-parser")
//new section
var http1 = require("http");
var url = require("url");
var mysql = require('mysql');
var connection=require('./dbConnection')

// var Process = function(Request,Response){
//     Response.writeHead(200,{'content-Type':'text/html'})
// var urldata=url.parse(Request.url,true);
//   if(urldata.pathname=='/'){
//     console.log("Homepage reached")

//     con.connect(function(data){
//      
//         })
//         Response.end();
//         })
//         })
//         }
//new section
app.set('view engine', 'ejs');
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.render("index1") 
})

app.get("/login",function(req,res){
    res.render("index2") 
})
app.get("/user",function(req,res){
    res.render("index3") 
})
app.get("/Admin",function(req,res){
    res.render("index4") 
})

// app.get("/Form",function(req,res){
// res.sendFile(_dirname+"//entry.html");
// });

app.post("/signup-isaac",(req,res)=>{
    let Username = req.body.Username;
    let Password = req.body.Password;
    let Role = req.body.Role;
    let Name = req.body.Name;

    var Signup= `Insert into users values(null, '${Username}','${Role}','${Name}','${Password}')`;
    var Login= `Insert into personal values(null, '${Name}','${Regno}','${Address}')`;

    con.query(Signup,Login,function(err,fields){
        if(err){
            console.log(err)
        }
        else{
                // Results.forEach(function(item){
console.log("Record has been inserted")
res.redirect("/");
        }
                })
                })
            // })
 
//     console.log(req.body) 
//     res.sendFile(_dirname+"index2.ejs");
// })
// app.post("/ProcessForm",(req,res)=>{
// console.log(req.body)
// var name=req.body.name;
// var marks=req.body.marks;
// res.write("Name: "+name)
// res.write("Marks: "+marks)
// res.end();
// })
app.listen(6001,function(){
    console.log("server started");
})