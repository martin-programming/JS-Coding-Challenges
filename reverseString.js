//Reverse a string

const reverseStr = str => {
    final = ""

    for (let i = str.length; i--;) {
        final += str[i]        
    }

    return final
}

console.log(reverseStr('perro'))

//orrep