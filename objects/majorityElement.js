
const findMajorityElement = (arr = []) => {
  const keys = {};

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (keys[currentElement]) {
      keys[currentElement] += 1;
    } else {
      keys[currentElement] = 1;
    }
  }

  let maxCountValue = 0;
  let maxCountKey = 0;

  for (const key in keys) {
    const value = keys[key];

    if (value > maxCountValue) {
      maxCountValue = value;
      maxCountKey = key;
    }
  }

  return maxCountKey;
}

console.log(findMajorityElement(array));
const array = [1, 54, 2, 3, 2, 5, 2];

function findMostFrequentNumber(arr) {
  let maxCount = 0;
  let mostFrequentNumber;

  for (let i = 0; i < arr.length; i++) {
      let currentNumber = arr[i];
      let currentCount = 1;

      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] === currentNumber) {
              currentCount++;
          }
      }

      if (currentCount > maxCount) {
          maxCount = currentCount;
          mostFrequentNumber = currentNumber;
      }
  }

  return mostFrequentNumber;
}

// Example usage:
let numbers = [1, 2, 2, 3, 4, 2, 5, 6, 2, 7];
let result = findMostFrequentNumber(numbers);