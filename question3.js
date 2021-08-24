// Question
// How can I write a sleep function using a promise?
// Solution
function sleep(ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    });
}
sleep(1000);