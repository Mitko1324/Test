// armstrong 153

//convert to string to check the length

// convert the string to number

//calculate 

//save it in variable

//compere the result

const armstrong = (numb=1)=>{
    let result = 0
    const numbAsString = numb.toString()
    for(let i=0;i<numbAsString.length;i++){
        let current = Number(numbAsString.charAt(i))
        let calculagtedNumber = Math.pow(current,numbAsString.length)
        result = result + calculagtedNumber
        
    }
    return numb === result

    
}
console.log(armstrong(153));

