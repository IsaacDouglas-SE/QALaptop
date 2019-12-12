//displaying specific characters from a string.
//this does not include the seventh character and starts at position zero (0).
//Created a new variable to store the count of the spaces (to determine word count).
//if statement checks the Name variable characters, to see if they are equal to a space.
// if the above statement is true, within the parenthesis, the variable count will add +1 every time.


var Name = "Isaac is back"
var Count = 1;
for(var i=0; i<Name.length;i++){

if(Name.substring(i,i+1) ==" "){
Count++
}
}
console.log(Count);
console.log(Name);

//Task2 - Reverse the string variable Name.
//The first variable is the message we want to display.
//The second var is capturing the characters from the for loop, each letter at a time.
//the for loop then creates a new var called i to capture the length of the message var.
// i initiallises as the length of the message - including spaces, minus 1 (12)
// if i is greater than or equal to 0
// Then take away from i
// if i is equal to a space,
// then word
// else, add the letter stored in word to what is currently in word, to concatenate.

var Msg = "Isaac is back"
var Word = ""
for(var i=Msg.length-1;i>=0;i--){
if(Msg.substring(i,i+1) ==" "){
  console.log(Word)
Word=""
}
else{
  Word=Msg.substring(i,i+1)+Word
}
}

console.log(Word);
