  async function f1(){
      console.log("async function");
      return Promise.resolve("promise");
  }
  f1();
  console.log("hello");
  
