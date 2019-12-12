var fs=require("fs");
var F2=fs.createWriteStream("File2.txt",{encoding:"utf8"})
var F=fs.createReadStream("File.txt",{encoding:"utf8"})

  F.on("data", function(Text){
    var newdata="";
    for(var i=0; i<Text.length; i++){
      if(Text.substring(i,i+5)=="Isaac"){
        newdata+="*";
        i+=5;
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
