// [4,6,12,56]
const biggest = (arr)=>{
    let temp = 0
    for (let i=0;i<arr.length;i++){
        if(arr[i]>temp){
            temp= arr[i]
        }
    }
    return temp
}
