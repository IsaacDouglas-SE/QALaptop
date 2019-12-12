//Create the code based on the scenario, remove duplicates from string
// Msg needs to be stored as a variable String.
// There will need to be a function to perfrom an action.
// A for loop will be required to loop through the letters.
// There will need to be an if statement to identify any conditions.
// i will need to be resolved into a variable
// the length of the Msg will need to be obtained.
// The result will need to be displayed once formulated.
// will need to check for spaces to identify a word count.
// A blank variable will be required.
// An array will be required to store multiple values.
// find the word and check if its duplicated.

// desired string 'Shafeeq is back, no'
var Message = " Shafeeq is back is Shafeeq back, no"
var Word, Newmessage=""
var Words=[];

for(var i=0;i<Message.length;i++)

    if(Message.substring(i,i++)==""){
      if(checkunique(Word)){
        Newmessage+=Word;

      }
Word=""
    }
    else{
      Word=Message.substring(i,i+1);
    }

function checkunique(checkword){
  for(var i=0;i<Words.length;i++){
    if(Words[i]==checkword){
      return false;
    }
  }
  Words.push(checkword);
  return true;
}
