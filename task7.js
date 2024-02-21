// input let str1 = 'asdfgh' -> output 'df'  
// input let str2 = 'asdfg'  -> output 'd'

function str(word){
   let midIndex = Math.floor(word.length /2)
   if(word.length % 2 === 0){
    return word.charAt(midIndex -1) + word.charAt(midIndex)
   }
return word.charAt(midIndex)
}console.log(str('asdfgh'));