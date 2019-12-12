var refevents=require("events");
var emitter = new refevents.EventEmitter();
emitter.on("Boom", function(){
  console.log("hello");
});
emitter.on("Fire", function(){
  console.log("hello2");
});
emitter.on("Boom", function(){
  console.log("Nationwide");
})
emitter.on("Boom", function(){
  console.log("QA");
})
emitter.emit("Boom")
