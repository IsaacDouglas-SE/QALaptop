// first line
import './style.css';
var http1 = require("http");
var url = require("url");
var Process = function(Request,Response){
  Response.writeHead(200,{'content-Type':'text/html'})
  var urldata=url.parse(Request.url,true);
  if(urldata.pathname=='/add'){
  var Result = parseInt(urldata.query.No1)+parseInt(urldata.query.No2);
  Response.write("Result is: "+Result)
}
if(urldata.pathname=='/sub'){
var Result = parseInt(urldata.query.No1)-parseInt(urldata.query.No2);
Response.write("Result is: "+Result)
}
if(urldata.pathname=='/div'){
var Result = parseInt(urldata.query.No1)/parseInt(urldata.query.No2);
Response.write("Result is: "+Result)
}
if(urldata.pathname=='/mul'){
var Result = parseInt(urldata.query.No1)*parseInt(urldata.query.No2);
Response.write("<b>Result is: </b>"+Result)
}
  Response.end();
}
  var Server=http1.createServer(Process);
  console.log("request recieved")
  Server.listen(4001);
