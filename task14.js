//You are given an array of integers from 1 to n with one number missing. Write a function called findMissingNumber that takes an array as an argument and returns the missing number.
// console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8])); // Output: 5
// console.log(findMissingNumber([1, 3, 5, 2, 6, 7, 8, 9])); // Output: 

function findMissingNumber(arr = []) {
    let sortedArr = arr.sort()
    for (let i = 0; i < sortedArr.length-1; i++) {
        let nextElement = sortedArr[i + 1]  //2
        let currentElement = sortedArr[i]  //1
        if (nextElement != currentElement +1) {
            return currentElement + 1
        }

    }return null
}
console.log(findMissingNumber([1,2,4, 5,6, 3, 7, 8]))
// console.log(findMissingNumber([1, 3, 5, 2, 6, 7, 8, 9]))