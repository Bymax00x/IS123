// b.
// Create a function which takes parameters a,l
// a is a list of two integers
// l is a list of integers
// find the sum of all the multiples of elements of a in l


function sumOfMultiplesExe6() {
    let a = document.getElementById('parama').value.split(',').map(Number);
    let l = document.getElementById('paraml').value.split(',').map(Number);

    let sum = l.reduce((acc, num) => {
        return (num % a[0] === 0 || num % a[1] === 0) ? acc + num : acc;
    }, 0);

    document.getElementById('result').innerText = 'Sum of multiples: ' + sum;
}