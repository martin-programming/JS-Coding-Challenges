//Fibonacci
//[1, 1, 3, 5, 8...]

function fibonacci(n1, n2, limit) {
    var resultArray = [parseInt(n1), parseInt(n2)]

    for(var i = 0; i < limit; i++) {
        var newNumber = n1 + n2;
        resultArray.push(newNumber)
        n1 = n2
        n2 = newNumber
    }
    return resultArray
}

console.log(fibonacci(1, 1, 100))

