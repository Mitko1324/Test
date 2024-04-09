//output is the score of even numbers [4,2,5,7,8]
const evenCalclulation = (arr=[])=>{
    let even = 0
    let odd = 0
    for(let i=0;i<arr.length;i++){
      if(arr[i]%2===0) {
        even = arr[i] + even
      } else{
        odd = arr[i]+ odd
      }
    }
    if(even - odd >= 0){
        return even - odd
    }
    return odd - even
    
}
console.log(evenCalclulation([1,4,5,7,8]));