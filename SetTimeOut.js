function greet(){
console.log("Hello Hackers!!");;


}
setTimeout(greet,3000);
console.log("hello");

//setTimeout returns intervalID or time in seconds
const timeInterval=setTimeout(()=>{
console.log("hello");
},3000)
console.log(timeInterval._idleTimeout);
