// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4,5,6]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

function mergeElements(arr1 = [], arr2 = []) {
    if (arr1.length === 0 && arr2.length === 0) {
        return []
    }
    if (arr1.length === 0 || arr2.length === 0) {
        return arr1.length > 0 ? arr1 : arr2
    }
    let collect = []

    while (arr1.length > 0 && arr2.length > 0) {
        let deletedElement1 = arr1.splice(0, 1)
        let deletedElement2 = arr2.splice(0, 1)
        if (deletedElement1[0] < deletedElement2[0]) {
            collect.push(deletedElement1[0])
            arr2.unshift(deletedElement2[0])

        } else {
            collect.push(deletedElement2[0])
            arr1.unshift(deletedElement1[0])
        }
    }
    if (arr1.length > 0) {
        for (let i = 0; i < arr1.length; i++) {
            collect.push(arr1[i])

        }
    } else {
        for (let i = 0; i < arr2.length; i++) {
            collect.push(arr2[i])
        }
    }return collect

}console.log(mergeElements([1,2,3],[1,2,3,4,5]));

