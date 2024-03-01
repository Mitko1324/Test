// array.splice

// description
// method signiture: splice(start, deleteCount, ...items) => array with the removed values
// Removes elements from an array and, if necessary,
// inserts new elements in their place, returning the deleted elements
// start parameter refers to the index from which splice should start 
// (including the starting point) removing elements
// deleteCount parameter refers to how many items should be removed
// if deleteCount is not provided all elements are removed
// ...items parameter refers to the elements that will be inserted in place of the removed ones

const initialElements = [1, 2, 3, 4];
const elementsToBeAdded = [5, 6, 7, 8];
const removedElements = initialElements.splice(0, 4, ...elementsToBeAdded)


// basic implementation of splice method
const splice = (arr = [], start = 0, deleteCount = 0) => {
  const resultArray = [];
  let counterRemoved = 0;

  while (counterRemoved < deleteCount) {
    const returned = arr.splice(start, 1);
    resultArray.push(...returned);
    counterRemoved++;
  }

  return resultArray;
}

const arr1 = [1, 2, 3, 4]
const arr2 = splice(arr1, 0, 3)
console.log(arr1);
console.log(arr2);

// splice() ? => array
// array with the removed values of the array which splice was called on
// splice returns elements removed from initialElements array which are [1, 2, 3, 4]
// removedElements becomes [1, 2, 3, 4]

// console.log(removedElements); // [ 1, 2, 3, 4 ]
// console.log(initialElements); // [ 5, 6, 7, 8 ]
// console.log(elementsToBeAdded); // [ 5, 6, 7, 8 ]