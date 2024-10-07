// Arrays:
// a.
// Create a function which takes parameters a,b,l
// l is a list of integers
// find the sum of all the multiples of a or b in l

// list = [0, 1, 2, 3, 4, 5, 6];

function exerciseFive(a, b, list) {
  let total = 0;

  list.forEach((item) => {
    if (item % a === 0 || item % b === 0) {
      total += item;
    }
  });
  console.log("total here", total);
  alert("exercise five answer " + total);
}
