var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var http1 = require("http");
var url = require("url");
var mysql = require("mysql");
var con = require("./dbConnection");

var con = mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"root",
    "database":"Nationwide"
  })

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
app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.render("index1");
  var ShowData = `select * from users`;
  con.connect(function(data){
    con.query(ShowData, function(err, data) {
      
    })
})
})

app.get("/login", function(req, res) {
  res.render("index2");
});
app.get("/user", function(req, res) {
  res.render("index3");
});
// app.get("/Admin", function(req, res) {
//   res.render("index4");
// });

//new section

app.get("/Admin", function (req, res) {


    var results = [];
 
        var sqlquery = `select * from personal;`
        console.log(sqlquery);
        con.query(sqlquery, function (err, data) {
            if (err) {
                console.log("Errorrrrrr");
            }
            else {
                results = data;
                console.log(results);
                res.render("index4", {"results" : results ,"role": req.session.Role,"name":req.session.Name})
            }
 
        });
    })

// app.get("/Form",function(req,res){
// res.sendFile(_dirname+"//entry.html");
// });

app.post("/signup-isaac", (req, res) => {
  let Username = req.body.Username;
  let Password = req.body.Password;
  let Role = req.body.Role;
  let Name = req.body.Name;

  
  // res.write("Username:" + Username)
  // res.write("<br>")
  // res.write("Password:" + Password)
  // res.write("<br>")
  // res.write("Name:" + Name)
  // res.write("<br>")
  // res.write("Role:" + Role)
  // res.write("<br>")
  // res.end();

  var Signup = `Insert into users values(${Role},'${Username}','${Name}','${Password}')`;
  
  con.connect(function(data){
  con.query(Signup, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      // Results.forEach(function(item){
      console.log("Record has been inserted");
      res.redirect("/");
    }
  });
});
});
// app.post("/submit-isaac", (req, res) => {
//   let Username = req.body.Username;
//   let Password = req.body.Password;
  

//   var Login = `Insert into personal values('${empno}','${Name}','${Address}')`;

//   con.connect(function(data){
//   con.query(Login, function(err, data) {
//     if (err) {
//       console.log(err);
//     } else {
//       // Results.forEach(function(item){
//       console.log("You have logged in successfully");
//       res.redirect("/");
//     }
//   })
// })
// })
app.post("/submit-isaac", function(req, res){
  var Username = req.body.Username;
  var Password = req.body.Password;
  var Login = `select * from users where username = '${Username}' and password='${Password}'`;
  con.query(Login, function(err, data) {
    if (err) {
      console.log(err);
    }
     else {
      if(data.length>0){
      console.log("You have logged in successfully");
      res.render("index4");
      } else{
        res.redirect("/login")
        console.log("failed");

        
      }
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
app.listen(6001, function() {
  console.log("server started");
});
