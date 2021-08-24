const count=false;
const promise=new Promise((resolve,reject)=>{
if(count){

    resolve('promise resolved');

}else{

    reject('something went wrong ');

}

});

promise.then((msg)=>{
    console.log(msg);

}).then((msg)=>{
   

}).catch((msg)=>{

    console.log(msg);
}).finally(()=>{
    console.log("finally called");

})