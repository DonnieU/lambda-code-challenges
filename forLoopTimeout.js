// nstructions from your teacher:
// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

// You may add, or change the code, but you cannot delete the setTimeout function.
for (var i = 1; i <= 10; i++) {
// for (let i = 1; i<= 10; i++) { // <-- ES6 fix is to change 'var' to 'let' because of JS Hoisting (var gets hoisted, let doesn't)
  //console.log(i);
  setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
    /* Answer: because the console.log was within the setTimeout function */
    console.log(i);
  }, 0);
}

/*
Explanation: The console log is inside the anonymous function of setTimeout and setTimeout
is executed when current call stack is over. So, the loop finishes and before setTimeout
get the chance to execute. However, anonymous functions keep a reference to i by creating a closure.
Since, the loop is already finished, the value i has been set to 11.
When setTimeout use the value of i by reference, it gets the value of i as 11.
Hence, you see 11 ten times.

Solution: You can fix it by avoiding closure. Just create a IIFE (Immediately Invoked Function Expression),
it will create its own scope and you can pass i to the function.
In that case i will be a local variable (will not refer to i in the closure)
and value of the i in every loop will be preserved.

for(var i = 0; i < 10; i++) {
    setTimeout((function(i) {
      console.log(i);
    })(i), 10)
}

Alternative Solution: Look at the code below and use your brain (if any).
for(var i = 0; i < 10; i++) {
  setTimeout(console.log.bind(console, i), 10);
}
*/