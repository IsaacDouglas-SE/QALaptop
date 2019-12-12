// // first line
// import './style.css';
// <link rel="stylesheet" type="text/css" href="style.css">
//http://localhost:4001/add?No1=10&No2=15


var http1 = require("http");
var url = require("url");
var mysql = require('mysql');


var Process = function(Request,Response){
  Response.writeHead(200,{'content-Type':'text/html'})

  var urldata=url.parse(Request.url,true);
  if(urldata.pathname=='/'){
    console.log("Homepage reached")

    con.connect(function(data){
      con.query("select * from Results",function(err,Results,fields){
        Results.forEach(function(item){
            Response.write('<a href = "http://localhost:4001/1"> link 1</a>')
            Response.write('<br>')
            Response.write('<a href = "http://localhost:4001/"> link 2</a>')
            Response.write('<br>')
            Response.write('<a href = "http://localhost:4001/"> link 3</a>')
            Response.write('<br>')
            Response.write("Name: "+'<a href = "http://localhost:4001/1"> '+item.Name+'</a><br>'+"Regno: "+item.Regno+'<br>'+"Marks: "+item.Marks)
})
Response.end();
})
})
}
var urldata=url.parse(Request.url,true);
if(urldata.pathname=='/1'){
  console.log("Link 1 reached")

  con.connect(function(data){
    con.query("select * from accounts where empno='1'",function(err,Results,fields){
      Results.forEach(function(item){
          Response.write("Empno: "+item.empno+'<br>'+"Date: "+item.date1+'<br>'+"Salary: "+item.Salary)
        })
        Response.end();
        })
        })
        }
//   var urldata=url.parse(Request.url,true);
  if(urldata.pathname=='/add'){
  var Result = parseInt(urldata.query.No1)+parseInt(urldata.query.No2);
  Response.write("Result is: "+Result)
  console.log("add page reached")
  // Response.write(People)
}
if(urldata.pathname=='/sub'){
var Result = parseInt(urldata.query.No1)-parseInt(urldata.query.No2);
Response.write("Result is: "+Result)
console.log("sub page reached")
}
if(urldata.pathname=='/div'){
var Result = parseInt(urldata.query.No1)/parseInt(urldata.query.No2);
Response.write("Result is: "+Result)
console.log("div page reached")
}
if(urldata.pathname=='/mul'){
var Result = parseInt(urldata.query.No1)*parseInt(urldata.query.No2);
Response.write("<b>Result is: </b>"+Result)
console.log("mul page reached")
}
  // Response.end();
}

var con = mysql.createConnection({
  "host":"localhost",
  "user":"root",
  "password":"root",
  "database":"Nationwide"
})

var Something = [];

con.connect(function(data){
con.query("select * from Results",
function(err,Results,fields){
var People = Results.forEach(function(item){
var Name = console.log("Name: "+item.Name);
console.log("Regno: "+item.Regno);
console.log("Marks: "+item.Marks);
Something.push(People);
console.log(Something);
console.log(People);
console.log(Name);
})
})
})








//Server creation and port opened at 4001
  var Server=http1.createServer(Process);
  console.log("Request received")
  Server.listen(4001);
