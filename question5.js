// Question
// What is the output of the following code?
const promise = new Promise(res => res(2));
promise.then(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });
// Solution
// 2
// 4
// undefined
// 8
// The finally block doesn’t receive any value,
//  and anything returned from finally is not considered in the then block so the output from the last then is used.