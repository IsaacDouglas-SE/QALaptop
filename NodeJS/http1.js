var http = require("http");
var RequestFunction = function (Request,Response){
  if(Request.url=="/home"){
    console.log("Homepage reached")
  }
    if(Request.url=="/login"){
      console.log("Log-in page reached")
    }
}
  var Server=http.createServer(RequestFunction);
    console.log("request recieved")
  Server.listen(4001);
