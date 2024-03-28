//let str1 = '45789' -->
const sum = (str)=>{
    let temp = str.split('')
    let calculation = 0
    for (let i=0;i<temp.length;i++){

        calculation = Number(temp[i])+calculation
    }
    return calculation

    
}
console.log(sum('45789'));
