// question 1
let sum = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum); 

function handleClick() {
    console.log("Button was clicked!");
}
