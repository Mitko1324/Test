const ar_palindroms = (str1 = '', str2 = '') => {
    if (str1.length !== str2.length) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        let first_char = str1.charAt(i)
        let last_char = str2.charAt(str2.length - 1 - i)
        if (first_char !== last_char) {
            return false

        }
        
    }
    return true

}
console.log(ar_palindroms('word','drow'));
