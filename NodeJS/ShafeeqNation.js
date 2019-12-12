var fs=require("fs");
var F2=fs.createWriteStream("File4.txt",{encoding:"utf8"})
var F=fs.createReadStream("File3.txt",{encoding:"utf8"})

  F.on("data", function(Text){
    var newdata="";
    for(var i=0; i<Text.length; i++){
      if(Text.substring(i,i+7)=="Shafeeq"){
        newdata+="Nationwide";
        i+=11;
      }
      else{
        if(Text.substring(i,i+7)=="Douglas"){
          newdata+="?";
          i+=7;
        }
        else{
        newdata+=Text.substring(i,i+1);
          }

      }
    }
F2.write(newdata)
})
F.on("end", function(){
  console.log("File finished");
  })
