// [19, 5, 42, 2, 77], the output should be 7

function sumSmallest (arr){
    let smallestInts = arr[0]
    let secondSmallest = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0 && arr[i]<smallestInts){
            secondSmallest = smallestInts
            smallestInts = arr[i]
        }
    }return smallestInts + secondSmallest
}console.log(sumSmallest([19,5,42,2,77]));


