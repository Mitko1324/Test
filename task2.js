//input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], return [10, -65]

function countAndSum(arr1){
    if(arr1 === null||arr1.length === 0 ){
        return null
    }
    let positiveCount = 0
    let negativeSum = 0
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] > 0){
            positiveCount++
        }
        else{
            negativeSum = negativeSum + arr1[i]
        }
    }return [positiveCount,negativeSum]
}console.log(countAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

module.exports = {
	countAndSum
}
