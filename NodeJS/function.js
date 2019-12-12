// A function returning a function
// First line is creating a function called Operations
// A variable called F is then assigned another function
// F contains the console.log to print hello
// F is then returned??
// A new variable name Myf is then created, which holds two functions
// Myf is then called, which prints hello
// no value is passed as no value is expected

function Operations(){
  var F = function(){
    console.log("hello");
  }
  return F;
}
var Myf=Operations()
Myf()
