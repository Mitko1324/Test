const numb = [2,4,5,8,1,12,14,15]
const result = numb.map((value,index)=>{
 if(index % 2 === 1){
    return value -1
 }
 return value +1

})
console.log(result);