// we have created a class called data
// we are creating a constructor
// 'A' is a key and the function displays hello
// 'B' is a key and the function displays hello
// we are then creating a variable (object ref) to the class Data
// we are then referencing the object, and calling the var of the constructor
// the constructor is then being called for the key 'A' and this prints 'hello'
// the constructor is then being called for the key 'B' and returns value 'good morning'

class Data{
  constructor(){
    this.Something={
      "A":function(){
        console.log("hello, ");
      },
      "B":function(){
        console.log("Good morning");
      }
    }
  }
}
var Ref=new Data();
Ref.Something["A"]();
Ref.Something["B"]();
