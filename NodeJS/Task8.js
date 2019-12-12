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
  adding(Key,Valuefunction){



this.record={
  "training":[function(){
    console.log("Study")
  },
  function(){
    console.log("Screens Down")
  },
  function(){
    console.log("Few breaks")
  }
  ]
}

  var Ref=new Nationwide();
  Ref.adding("Training",function(){
  console.log("Unknown")
});
  Ref.adding("Training",function(){
  console.log("hello")
})
}
