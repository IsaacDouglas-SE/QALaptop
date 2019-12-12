// first line

var http1 = require("http");
var Process = function(Request,Response){
  // Response.writeHead(200,{'content-Type':'text/html'})
  if(Request.url=="/home"){
    Response.write("<B>homepage reached</B>")
    console.log("Homepage reached")
  }
  if(Request.url=="/aboutus"){
    Response.write("<B>about us reached</B>")
    console.log("about us page reached")

  }
  Response.end();
}
  var Server=http1.createServer(Process);
    console.log("request recieved")
  Server.listen(4001);
