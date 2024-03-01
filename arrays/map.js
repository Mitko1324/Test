// array.map

// description
// method signiture: map(callback) => array with the new values
// Creates a new array from the original array's values modified by the callback function
// callback => (value, index) => value
// value refers to every value in the array
// index refers to the current index

const numbers = [1, 2, 3, 4];
const multipliedByTwoArray = numbers.map((value) => value * 2); // [2, 4, 6, 8]

const strings = ['frog', 'dog', 'cat'];
const resultStrings = strings.map((value, index) => {
  if (index % 2 === 0) {
    return value.toUpperCase();
  }

  return value;
});
