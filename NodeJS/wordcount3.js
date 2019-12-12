//Task3 - Reverse the string variable Name and use method in function.
//The first variable is the message we want to display.
//The second var is capturing the characters from the for loop, each letter at a time.
// New variable to capture function to store the reverse code
// When code is working, it will print here.
//the for loop then creates a new var called i to capture the length of the message var.
// i initiallises as the length of the message - including spaces, minus 1 (12)
// if i is greater than or equal to 0
// Then take away from i
// if i is equal to a space,
// then set word to nothing (clear)
// else, concatenate the letter stored in word to the value stored in msg and display

var Message = "Isaac is back"
var Newmessage = ""
var Word;
for(var i=0;i<Message.length;i++){
  if(Message.substring(i,i++)==""){
    Newmessage+=reverse(Word)+"";
    Word=""
  }
  else{
    Word+=Message.substring(i,i+1);
  }
}
Newmessage+=reverse(Word);

//code to reverse the words, inside msg, in same order, inside function.
Function reverse(Word){
  var Newword="";
  for(var P=Word.length-1;i>=0;i--){
    Newword+=Word.substring(i,i+1);
}
return Newword;
}
