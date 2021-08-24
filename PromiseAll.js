var p1=Promise.resolve(3);
var p2=1337;
var p3=new Promise((resolve,reject)=>{

setTimeout(()=>{ resolve("foo");},300);
});
Promise.all([p1,p2,p3]).then((values)=>{

    console.log(values);
});

var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p2);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }