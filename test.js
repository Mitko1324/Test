// [1,2,3,4,6,7,8]

function consecutive (arr1){
for(let i = 0; i<arr1.length; i++){
    let currentNumber = arr1[i] + 1
    let nextNumber = arr1[i+1]
    if(currentNumber !== nextNumber){
return nextNumber
    }
}
     
}console.log(consecutive([1,2,3,4,6,7,8]));