// we are creating the class Nationwide
// we are creating a constructor inside this class
// We are creating a record to hold JSON key & Valuefunction
// We are using training to hold an array of functions
// We are creating records within the array, holding multiple functions
// new object created
// using the object ref variable to send a function to adding

class Nationwide{
  constructor(){
    this.record={}
  }
  adding(Key,f1){
    if(this.records[Key]==null){
      this.records[Key]=[];
    }
    this.records[Key]=[];
    }
    this.records[Key].push(f1);
  }
