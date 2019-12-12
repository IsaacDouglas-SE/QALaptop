function Add(){
  var Result=0;
  for(var i=0;i<arguments.length;i++){
    Result+=arguments[0];
  }
  return Result;
}
console.log(Add(2,5,9))
console.log(Add(2,4))
console.log(Add(2,4,5,6))
