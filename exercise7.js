function sumOfMultiplesExe7() {
    let a = document.getElementById('firsta').value.split(',').map(Number);
    let l = document.getElementById('firstl').value.split(',').map(Number);

    let sum = l.reduce((acc, num) => {
        return a.some(divisor => num % divisor === 0) ? acc + num : acc;
    }, 0);

    document.getElementById('resultexe7').innerText = 'Sum of multiples: ' + sum;
}