// we are creating an empty array inside a variable ( to reference it)
// we are creating a variable and storing a function inside
// the function prints hello
// we are sending the Msg function using push to the array
// we are sending a newly created function using push to the array
// we are sending a newly created function using push to the array
// we are searching through the length of the array to terminate the code once complete

var Something = [];
var Msg = function(){
  console.log("hello1");
}
Something.push(Msg);
Something.push(function(){
  console.log("hello2");
})
Something.push(function(){
  console.log("hello3");
})
for (var i=0;i<Something.length;i++){
  Something[i]();
}
