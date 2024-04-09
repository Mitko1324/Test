//input let str = umbrella and let countLetter = l    ->output 2
const countLetters = (str = "", letter = "") => {
    let count = 0
    let str1 = str.toLowerCase()
    let letter1 = letter.toLowerCase()
    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) === letter1) {
            count++
        }
    }
    return count
}
console.log(countLetters("umbrella","l"));



