// a new function is created, which recieves values passed to 'A & B'.
// the next line stores the final value after addition of the numbers passed from A&B into Result
// The result is 9.
// a second function is created, F2, which recieves values passed to 'A & B'.
// the next line stores the final value after subtraction of the numbers passed from A&B into Result
// The result is 2.
// The new function Maths, then calls a function and values
// F??
// Maths calls F1 function and sends values
// Maths calls F2 function and sends values


var F1=function(A,B){
    var Result=A+B;
      console.log("Result is:"+Result);
    }

var F2=function(A,B){
  var Result=A-B;
    console.log("Result is:"+Result);
    }
function Maths(F,A,B){
F(A,B);
}
Maths(F1,5,7);
Maths(F2,7,5);
