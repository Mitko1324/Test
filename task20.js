//5||3 % number 10   
//we can iterate with for loop thru the numbers
//if module of 3 or 5 === 0 store the number and reasign
//return the result
const modul = (numb) => {
    let result = 0
    for (let i = 0; i < numb; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            result = result + i
        }
    }
    return result
}
console.log(modul(1000));
