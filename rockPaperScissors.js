//function rockPaperScissors() {
// #1 Take an integer (assign it a default value if not passed)
// #2 Calculate possibilities num^2
// #3 Draw out truth table where Rock = 0, Paper = 1, Scissors = 2:
// 0 0 0
// 0 0 1
// 0 0 2
// 0 1 0
// 0 1 1
// 0 1 2
// 0 2 0
// 0 2 1
// 0 2 2
// etc
// #4 how to do it w/ different depths???
// options = ['rock', 'paper', 'scissors'];
// let results = [];
// const depth = 3;
//   for (let i = 0; i < depth; i++) {
//     for (let j = 0; j < depth; j++) {
//       for (let k = 0; k < depth; k++) {
//         let arr = [options[i],options[j],options[k]];
//         results.push(arr);
//       }
//     }
//   }
//   return results;
// }

/* Instructor's solution... */
// function rockPaperScissors(num = 3) {
//   // store all array possibilities starting w/ empty array
//   // create array of possible choices (rock, paper, scissors)
//   // create recursive function, takes in roundsLeft, result array
//     // base case of 0 rounds left
//       // add the result to all array possibilities
//     // otherwise, possible choices, run recursive function, go down one level
//   // call recursive function, give it 3, and an empty array
//   // return all array possibilities
//   const outcomes = [];
//   const plays = ['rock', 'paper', 'scissors'];
//   function findOutcome(roundsLeft, result) {
//     if (roundsLeft === 0) {
//       outcomes.push(result);
//       return;
//     }
//     plays.forEach((choice) => {
//       findOutcome(roundsLeft - 1, result.concat(choice));
//     });
//   }
//   findOutcome(num, []);
//   return outcomes;
// }

function rockPaperScissors(num = 3) {
  const options = ['rock', 'paper', 'scissors'];
  const outcomes = [];
  for (let i = 0; i < Math.pow(3, num); i++) {
    const round = [];
    round.push(options[Math.floor((i+1)/10)%3]);
    round.push(options[Math.floor((i/3)%3)]);
    round.push(options[Math.floor(i%3)]);
    outcomes.push(round);
  }
  return outcomes;
}

console.log(rockPaperScissors(4));