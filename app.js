//// Timing Out
// 1. Create a function that takes a string message as an argument, and logs that message to the console
let friday = (`It's Friday`);

console.log(friday);

//3. Use setTimeout to call your function again, but with a different message and after 2 seconds
setTimeout(() => {
    console.log(friday)
}, 2000);

//4. Create a new function called getWords that will attempt to do the following using several setTimeout calls:
// Log a word instantly
// After 3 seconds, log another word
// After 2 seconds, log another word
// After 1 second, log a final word
let getWords = ('Word!');
setTimeout(() => {
    console.log(getWords)
}, 3000);
setTimeout(() => {
    console.log(getWords)
}, 2000);
setTimeout(() => {
    console.log(getWords)
}, 1000);

//// Callbacks and Recursion           
// 1. Create a function called done that logs Job's done! to the console
let done = (`Job's all done`);
console.log(done);

// 2. Create a different function (on the global scope) called countdown that accepts two arguments, num and callback
let countDown = (num, callback) => {

    setTimeout(() => {

        if (num > 0) {
            console.log(num);
            countDown(num - 1, callback)
        } else {
            callback();
        }

    }, 1000);
};
const isDone = () => {
    console.log("DONE")
};
//3. Call the countdown function and pass it two arguments: a number of seconds to countdown from and the done function and see if it works
countDown(5, isDone);

////Promises Promises ;)
//1. Create a new global variable called lunchTime with a value of true
var lunchTime = true;
//2. Create a new function called orderMeSomeFood that returns a new Promise
let orderMeSomeFood = new Promise(function (resolve, reject) {
    //3. In the resolver function of the Promise, write logic to check if the lunchTime variable is true   
    //4. If lunchTime is true, create an object with two properties and values (key/value pairs) of your choice: lunch: "your favorite lunch" drink: "your favorite beverage"
    if (lunchTime === false) {
        let lunch = { food: "Kimchi Jjigae", drink: "Cheerwine" };
        resolve(lunch)
    //6. If lunchTime is false, create a variable and set it equal to a new Error that has your own message
    } else {
        let err = new Error("No soup for you!");
    //7. Reject the Promise with your new Error
        reject(err);
    }

//8. Call your orderMeSomeFood function, chain you .then and don't forget your .catch
orderMeSomeFood()
    .then((results) => {
        return console.log(results)
    })
    .catch((err) => {
        return console.log(err)
    })

});
