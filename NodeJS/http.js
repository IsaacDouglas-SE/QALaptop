var http = require("http");
var Server=http.createServer(function(request,response){
  console.log("request recieved")
})
Server.listen(4001);
