var fs=require("fs");
var F2=fs.createWriteStream("File2.txt",{encoding:"utf8"})
var F=fs.createReadStream("File.txt",{encoding:"utf8"})

  F.on("data", function(Text){
  F2.write(Text)
})
F.on("end", function(){
  console.log("File finished");
  })
