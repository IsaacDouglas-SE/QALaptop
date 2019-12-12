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
              "Regno":"24",
              "name":"Isaac"
      }
    }
      adding(Key1,Value1){
        this.something[Key1]=Value1;
      }
  }

var Ref=new Data();
Ref.adding("Postcode","SN4");
Ref.adding("Regno","2");
console.log(Ref.Something["Regno"]);
console.log(Ref.Something.Regno);
console.log(Ref.Something.name);
ref.something.name="IsaacD"
