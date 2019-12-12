// we are creating an array and sending values into the variable 'numbers'
// we are then searching through each of the numbers and creating a function
// we are then checking if the numbers sent into the forEach function are even
// the if statement will determine the console log returned, true or false using if/else

var Numbers = [24,25,26];
Numbers.forEach(function(reffunc){
  if(reffunc%2==0){
    console.log(reffunc,"is even");
  }
  else{
    console.log(reffunc,"is odd");
  }
})
