var fs=require("fs");
var Count=0;
var F=fs.createReadStream("File.txt",{encoding:"utf8"})
F.on("data", function(Text){
  console.log(Text);
  Count=1;
})
F.on("end", function(Text){
  console.log("File finished");
  })
