//Find longest word in a string

const findLongestWord = str => {
    var words = str.split(' ')
    var longest = ""

    for(var word of words){
        if (word.length > longest.length) longest = word
    }
    return longest
}

console.log(findLongestWord('good bad no amazing'))

//amazing
