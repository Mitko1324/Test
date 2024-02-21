// let arr1 = ['dog','cat','flick','mouse','flick','tiger'] --> ['true','true','false','false','true','true']
let asd = ['Aida','Mitko','flick','Baha']
function flip(arr1){
    let output = []
    let flag = true
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]=== 'flick'){
            flag = !flag
        }
        output.push(flag)
    }return output
}console.log(flip(asd));