//Stack exercise making a palindrome exercise

let letters = [] //the stack

reverseWord = ''

const palindrom = word => {

    for(let i = 0; i < word.length; i++){
        letters.push(word[i])
    } 
  
    for (let i = 0; i < word.length; i++) {
        reverseWord += letters.pop()
    }
  
    if (reverseWord == word) {
        return `${word} is palindrome`
    } else {
        return `${word} is not palindrome`
    }
  
  }

  
  console.log(palindrom('arepera'))

//arepera is palindrome