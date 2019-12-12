var http1 = require("http");
var Process = function(Request,Response){
  if(Request.url=="/home"){
    Response.write("homepage reached")
    Response.end();
  }
}
  var Server=http1.createServer(Process);
  Server.listen(4001);
