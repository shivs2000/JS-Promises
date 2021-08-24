// Question
// What is the output of the following code?
const promise = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'));
  })
  .catch(error => console.log(error))
  .then(error => console.log(error));
// Solution
// Some error occurred
// undefined
// The catch function implicitly returns a promise, which can obviously be chained with a then.
//  Since nothing is returned from the catch block, when error is logged in the then block it displays undefined.