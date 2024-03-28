//let [1,2,3,4,6,7,8] --> output 5

const findNumb = (numbers=[])=>{
for (let i=0;i<numbers.length;i++){
    let currentNumber = numbers[i]
    let nextNumb = numbers[i+1]
    if(currentNumber +1 !== nextNumb){
        return currentNumber + 1
    }
    
}

}
console.log(findNumb([1,2,3,4,6,7,8]));