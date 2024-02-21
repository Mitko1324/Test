const numb = [2,4,5,8,1,12,14,15]
const zigzag =numb.map((value)=>{
    if(value % 5 === 0 && value % 3 === 0){
        return 'zigzag'
    }
    if(value % 5 === 0){
        return 'zag'
    }
    if(value % 3 === 0){
        return 'zig'
    }
    
        return value
    
})
console.log(zigzag)