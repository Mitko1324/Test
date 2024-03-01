// array.forEach

// description
// method signiture: forEach(callback) => void
// Performs an action on every element in an array
// callback => (value, index) => void
// value refers to every value in the array
// index refers to the current index

const array = [1, 2, 3, 4, 5];

let biggestElement = Number.MIN_VALUE;

array.forEach((value, index) => {
  if (value > biggestElement) {
    biggestElement = value;
  }
});

console.log(biggestElement);

let sum = 0;

array.forEach((value) => {
  sum += value;
});

console.log(sum);

const findLargerGroup = () => {
  let evenSum = 0;
  let oddSum = 0;

  array.forEach((value) => {
    if (value % 2 === 0) {
      evenSum += value;
    } else {
      oddSum += value;
    }
  });

  if (evenSum > oddSum) {
    console.log('Even numbers have greater sum');
  } else if (oddSum > evenSum) {
    console.log('Odd numbers have greater sum');
  } else {
    console.log('Odd and even numbers are equal');
  }
};

findLargerGroup()
// [0, 1, 2 , 3, 4, 5]
array.forEach((value, index) => {
  array[index] = value + 1;
});

console.log(array);