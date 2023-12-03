//[4,3,9,7,2,1] -> [2,9,3,49,4,1]

function square(arr){
    let output = []
    for(let i=0; i<arr.length;i++){
        let sq_number = Math.sqrt(arr[i])
        if(Number.isInteger(sq_number)){
            output.push(sq_number)
        }else{
            output.push(arr[i]*arr[i])
        }
    }return output
}console.log(square([4,3,9,7,2,1]));