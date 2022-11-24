function fibs(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i;
    }
    return total
}


console.log(fibs(3)) // 6
console.log(fibs(4)) // 10
// iteration fibonacci works




function fibsRec(n, total = 0) {
    if (n <= 0) {
        return total
    }
    return fibsRec(n-1, total + n)
}

console.log(fibsRec(3)) // 6
console.log(fibsRec(4)) // 10
// recursive fibonacci works