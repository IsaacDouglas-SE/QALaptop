// first line

var http1 = require('http');
var myurl = require('url');
var Process = function(Request,Response){
  Response.writeHead(200,{'content-Type':'text/html'})
  if(Request.url=='/'){
      Response.write('<A href="http://localhost:4001/TimesTable">TimesTable</A>')
      Response.write("<BR>")
      Response.write('<A href="http://localhost:4001/SelectTimesTable">Select TimesTable</A>')
      Response.write("<BR>")
      Response.write("<B>Homepage reached</B>")
      Response.write("<BR>")
      console.log("Homepage reached")
  }
  if(Request.url=="/TimesTable"){
      Response.write("<B>Times Table Reached</B>")
      Response.write("<BR>")
        for(var i=1;i<=10;i++){
          Response.write(2+"x"+i+"="+(2*1))
          console.log("Times Table Reached")
          Response.write("<BR>")
        }
}
  if(Request.url=="/SelectTimesTable"){
    Response.write("<B>Select Times Table Reached</B>")
    Response.write("<BR>")
      for(var i=1;i<=10;i++){
        Response.write('<A href="http://localhost:4001/generateTable?T='+i+'"> '+i+'</A>')
        console.log("Select Times Table Reached")
        Response.write("<BR>")
      }
}
if(Request.url=='/generateTable')
var TimesTable = myurl.parse(Request.url,true).query.T;
  for(var i=1;i<=10;i++){
    Response.write(TimesTable+"x"+i+"="+(TimesTable*i))
    Response.write("<BR>")
  Response.end();
}
}
  var Server=http1.createServer(Process);
    console.log("request recieved")
  Server.listen(4001);
