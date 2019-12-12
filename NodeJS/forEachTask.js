// we have created a class called data
// we are creating a constructor
// the function prints hello
// we are sending the Msg function using push to the array
// we are sending a newly created function using push to the array
// we are sending a newly created function using push to the array
// we are using forEach to search each element in the array until we finish
class Data{
  constructor(){
    this.record={
      "Regno":"251",
      "Name":"251",
      "Emails":["A1","A2","A3"]
    }
  }
}
var Ref=new Data();
  console.log(Ref.record.forEach(function(Ref){
    Ref();
  }));
