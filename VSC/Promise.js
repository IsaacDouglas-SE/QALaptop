var add=function(a,b){
    return new Promise(function(resolve,reject){
        if(a!=b){
            var result=a+b;
            resolve(result);
        }
        else{
            reject("Error: The numbers are both the same");
        }
    })
}

var P=add(2,2)
P.then(function(res){
        console.log(res)
},function(Error){
    console.log(Error);
})