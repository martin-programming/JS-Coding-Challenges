//Reverse a number

const reverse = x => {

    const k = x < 0 ? -1 : 1
    const n = Number(String(Math.abs(x)).split('').reverse().join(''))
    return n * k

};

console.log(reverse(3245))

//5423