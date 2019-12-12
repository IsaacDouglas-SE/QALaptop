//displaying specific characters from a string
//this does not include the seventh character and starts at position zero (0)
var Name = "Isaac is back"
var Count =0;
for(var i=0; i<Name.length;i++){
console.log(Name.substring(i,i+1));
console.log(i);
}
