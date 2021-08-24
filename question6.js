console.log("start");
setTimeout(()=>{
    console.log("setTimeout");
})
Promise.resolve("string").then((res)=>{console.log(res)});
Promise.resolve("2 String").then((res)=>{console.log(res)});
console.log("End");
/*
There is a concept of microstack queue and macrostack queue
promise's callback goes into microstack queue while setTimeout's callback goes into Macrostack queue.

priority of micro> macro so promise callback gets executed first while setTimeout gets
executed after it.

*/