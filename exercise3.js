function exerciseTwo(a, b, limit) {
  let total = 0;

  for (let i = 1; i < limit; i++) {
    if (i % a === 0 || i % b === 0) {
      total += i;
    }
  }

  alert("exercise two answer" + total);
}

document.getElementById("bttnExe1").addEventListener("click", exerciseOne);
document.getElementById("bttnExe2").addEventListener("click", function () {
  exerciseTwo(3, 5, 1000);
});

function findTotal() {
  // Get user input values
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let n = parseInt(document.getElementById("n").value);

  exerciseTwo(a, b, n);

  // Alert the result to the user
  // alert("The sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
}
