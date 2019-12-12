var process = function(req,res){
   res.writeHead(200,{"content-Type":"text/html"})
   if(req.url=='/'){
       res.write('/')
           res.write('<a href="http://localhost:4001/timestable">Times Table</a>')
           res.write('<br>');
           res.write('<a href="http://localhost:4001/selecttimestable">Select Times Table</a>')
       }
       if(req.url=='/timestable'){
           for(var i=1;i<=10;i++){
               res.write(2+'x'+i+'='+(2*i));
               res.write('<br>');
           }
       }
       if(req.url=='/selecttimestable'){
           res.write("<h2>Select any number")
           for(var i=1;i<=10;i++){
             res.write('<a href="http://localhost:4001/generatetable?T='+i+'">'+i+'</a>');
             res.write("<br>");
           }
       }
       if(req.url=='/generatetable')
       var timestable=myurl.parse(req.url,true).query.T;
       for(var i=1;i<=10;i++){
           res.write(timestable+"x"+i+"="+(timestable*i));
           res.write("<br>");
       }
   }
var http = require('http');
var myurl=require('url');
var server = http.createServer(process);
server.listen(4001);