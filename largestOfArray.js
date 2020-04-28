//Find the largest element of each array

const findLargest = arr => {
    let resultArray = []

    for (let i = 0; i < arr.length; i++) {
        let firstIndex = arr[i][0]

        for (let j = 0; j < arr[i].length; j++) {
            let currentElement = arr[i][j]  

            if(currentElement >= firstIndex) {
                firstIndex = currentElement
            }
        }
        resultArray.push(firstIndex)
    }

    return resultArray    
}



console.log(findLargest([[12, 5, 7, 29], [2, 54, 21], [356, 24, 32, 16]]));

//[29, 54, 356]