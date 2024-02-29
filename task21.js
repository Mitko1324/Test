//factorial numbers 5
//1*2*3*4*5

const getFactorial = (numb)=>{
    let result = 1
    for(let i=1;i<=numb;i++){
        result = result * i
    }
    return result
}
console.log(getFactorial(5));