//accum("abcd") -> "A-Bb-Ccc-Dddd"

function acc (str=''){
    let arr = []
    for(let i=0;i<str.length;i++){
        let char = str.charAt(i)
        let accStr = ''
        for(let j=0;j<i+1;j++){
            accStr+=char
        }
        arr.push(accStr)
    }
return arr.join('-')
}console.log(acc("abcd"));