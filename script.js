/*If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

1. Find the sum of all the multiples of 3 or 5 below 1000. */



function exerciseOne() {
  let total = 0;
  
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  
  console.log("Exercise one answer",total);
  alert('exercise one answer'+ total);
  }
  
  function exerciseTwo(a,b,limit) {
    let total = 0;
    
    for (let i = 1; i < limit; i++) {
      if (i % a === 0 || i % b === 0) {
        total += i;
      }
    }
    
    alert('exercise anwer answer'+ total);
    }


  document.getElementById("bttnExe1").addEventListener("click", exerciseOne);
  document.getElementById("bttnExe2").addEventListener("click", function() {
      exerciseTwo(3, 5, 1000);
  });


  function findTotal() {
    // Get user input values
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let n = parseInt(document.getElementById('n').value);

    exerciseTwo(a,b,n)

    // Alert the result to the user
    // alert("The sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
}
  
  
  
  