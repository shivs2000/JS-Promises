const myPromise=new Promise((resolve,reject)=>{
    
const connection=false;
if(connection){
    resolve('connection established');

}else{
    reject('connection rejected');
}

});


myPromise.then((msg)=>{
    console.log(msg);

}).catch((msg)=>{
    console.log(msg);

});