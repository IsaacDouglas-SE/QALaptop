var express = require("express");
var app = express();
var bodyparser = require("body-parser")
var con = require('./dbcontroller');
var mysql = require("mysql")

var con = mysql.createConnection({
   "host":"localhost",
   "user":"root",
   "password":"root",
   "database":"nationwide"
});

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
   res.render("index")
})
app.get("/login", function (req, res) {
   res.render("login")
})
app.get("/createuser", function (req, res) {
   res.render("createuser")
})


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/Form", function (req, res) {
   res.sendFile(__dirname + "createuser.ejs");
});
app.post("/action_page", (req, res) => {
   console.log(req.body)
   var username = req.body.username;
   var password = req.body.password;
   var name = req.body.name;
   var role = req.body.role;

   res.write("Username:" + username)
   res.write("Password:" + password)
   res.write("Name:" + name)
   res.write("Role:" + role)
   res.end();


   var sqlquery = `insert into users values('${role}','${username}','${name}','${password}')`;
   // var sqlPersonal = insert into personal values(${regno},${name},${marks});
   con.connect(function(data){
   con.query(sqlquery, function (error, data) {
       if (error) {
           console.log(error);
       }
       else {
           console.log("record inserted");
           res.redirect("/login")
       }
   })
   })
})
app.listen(6001, function () {
   console.log("server started");
});