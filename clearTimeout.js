let count=0;
function Increasecount(){


count+=1;
console.log(count);
   
}
var val=setTimeout(Increasecount,3000);
clearTimeout(val);