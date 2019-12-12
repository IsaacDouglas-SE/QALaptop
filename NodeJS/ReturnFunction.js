// a new function is created, which recieves a value 'choice'.
// the next line checks if the value passed through to choice is equal to one.
// if the above line is true, a new function will be stored in variable 'Func'
// The new function would recieve two values,
// console log would then print 'Result is' and add the two values together.
// If the choice is not equal to 1 (false) then the Func variable will store a different function
// The alternate function will equally recieve two values, but subtract them in the result.
// Func is returned
// F is then created as a variable, which will pull through the correct function, based on true or false
// providing the value is equal to 1, the first function runs
// F then sends the values 2 and 7 which would add to 9.

function Operations(Choice){
  if(Choice==1){
    var Func=function(A,B){
      console.log("Result is:", (A+B));
    }
  }
  if(Choice==2){
    var Func=function (A,B){
      console.log("Result is:", (A-B));
    }
  }
  return Func;
}
var F = Operations(1);
F(2,7);
