//  [1,3,0,5,0,8,7,0]

const zero = (arr) => {
    let result = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i])
        } else {
            count++
        }
    }
    for (let i = 0; i < count; i++) {
        result.push(0)
    }
    return result
}
console.log(zero([1,3,0,5,0,8,7,0]));





const zero1 = (arr) => {
    let result = []
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] !== 0) {
            result.unshift(arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return result
}
console.log(zero1([1,3,0,5,0,8,7,0]));