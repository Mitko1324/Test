const arr = ['dog', 'cat', 'yadadad'];

// dog, sheep
const sortedArray = arr.sort((a, b) => {
  // b: 5
  // a: 3
  // if positive => [b, a]
  // if negative => [a, b]
  // if 0 => [a, b]
  
  return b.length - a.length;
});

console.log(sortedArray); // [ 'yadadad', 'sheep', 'dog' ]