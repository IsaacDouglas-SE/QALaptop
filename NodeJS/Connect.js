
  var http=require('http');
  var URL=require('URL')
  var fs=require('fs')
  var querystring=require('querystring')
  var MYSQL=require('./dbConnection')
  var con=MYSQL()
  var showRec=require('./reports.js')

  function indexRequest(req,res){
      var lookingfor=URL.parse(req.url).pathname;
      if (lookingfor=="/"){
          fs.readFile('./index.html',function(error,data){
          if(!(error)){

              res.write(data);
              res.end();
          }
      })
    }
      if(lookingfor=="/showallrecords"){
        showRec(req,res);
      }
      if(lookingfor=="/entryform"){
        fs.readFile('./Entry.html',function(error,data){
          if(!(error)){
            res.write(data);
            res.end();
          }
      })
    }

    if(lookingfor=="/insertRecord"){
      console.log("hello");
    var data="";
    var record="";
    //data event
    req.on("data",function(chunk){
      data+=chunk;
    });
    //end event
    req.on("data",function(){
      record=querystring.parse(data);
      console.log(data);
      console.log(record);
      var sql=`insert into personal
      values($(record.regno),'$(record.name)','$(record.address)')`;
      //res.write(sql)
      //res.end();

      con.query(sql,function(error,result){
        if(error){
          console.log("Error:"+error)
        }
        else{
  console.log(result);
        }
      });

    })
  }
  }
  server=http.createServer(indexRequest)
  server.listen(8000)
