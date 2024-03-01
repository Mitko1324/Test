// array.indexOf

// description:
// method signiture: indexOf(value, fromIndex)
// finds first index of a value in an array
// example: arr = [1, 2, 1, 2, 3]
// arr.indexOf(2) => index 1

// indeOf accepts second parameter 'fromIndex'
// fromIndex sets the start search point
// when fromIndex is not provided 0 is set for start search point
// example: arr = [1, 2, 1, 2, 3]
// arr.indexOf(2, 2) => index 3
// here we search for value 2 and fromIndex param is set to search from index 2
// we get index 3 as a result since 3 is the first index where value 2 is located

// if a value is not present in an array indexOf returns -1 as a result
// example: arr = [1, 2, 1, 2, 3]
// arr.indexOf(5) => result -1 since 5 does not exist in the array