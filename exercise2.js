function exerciseTwo(a, b, limit) {
  let total = 0;

  for (let i = 1; i < limit; i++) {
    if (i % a === 0 || i % b === 0) {
      total += i;
    }
  }

  alert("exercise two answer" + total);
}
