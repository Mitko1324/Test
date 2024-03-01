// array.filter

// description
// method signiture: filter(callback) => array with the new values
// Creates a new array from the original array's values filtered by the callback function
// callback => (value, index) => boolean
// value refers to every value in the array
// index refers to the current index

const array = [1, 2, 3, 4, 5];

const evenNumbers = array.filter((value) => {
  if (value % 2 === 0) {
    return true;
  }

  return false;
});

console.log(evenNumbers); // [ 2, 4 ]

const products = [
  { name: 'toyo tires', price: 100 },
  { name: 'michelin', price: 85 },
];

const productsForLessThan = products.filter((product) => product.price < 90);

console.log(productsForLessThan); // [ { name: 'michelin', price: 85 } ]