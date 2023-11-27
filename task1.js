//add([1,-4,7,12]) => 1 + 7 + 12 = 20

function adding(arr1) {
    let collect = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > 0) {
            collect = arr1[i] + collect
        }

    } return collect
} console.log(adding([1, -4, 7, 12]));