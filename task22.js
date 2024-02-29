//fibonachi even numbers below 100
//
const getFib = (numb)=>{
    let a = 1
    let b = 1
    let result = []
    while(numb>b){

       let c = a+b
        a=b
        b=c
        if(c % 2 === 0 && c<numb){
            result.push(c)
        }
        


    }
    return result
}
console.log(getFib(100));