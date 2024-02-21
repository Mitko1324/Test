function isPallindrome(string) {
    for (let i = 0; i < string.length; i++) {
        let first = string.charAt(i)
        let last = string.charAt(string.length -1 -i)
        if(last!=first){
            return false
        }
    }return true
}console.log(isPallindrome('fuckf'));





