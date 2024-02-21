//['asd','treer','werw'] ---> 12

function countLetters(arr=[]){
    let count = 0
    for(let i=0;i<arr.length;i++){
        let temp = arr[i]
        count=temp.length+count
    }return count
}console.log(countLetters(['asd','treer','werw']));