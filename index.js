// bubble sort
const bubbleSort = (arr) => {
    for (let i = 0; i <arr.length; i++) {
        for (let j = 0; j < arr.length; j++ ) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

// merge sort
const merge = (left, right) => {
    const sortedArray = [];

    while(left.length || right.length) {
        if (left.length && right.length) {
            if(left[0] < right[0]) {
                sortedArray.push(left.shift())
            } else {
                sortedArray.push(right.shift())
            }
        } else if (left.length) {
            sortedArray.push(left.shift())
        } else if (right.length) {
            sortedArray.push(right.shift())
        }
    }

    return sortedArray
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = Math.floor((arr.length)/2)
   
    const left = arr.slice(0, pivot)
    const right = arr.slice(pivot)

    return merge(mergeSort(left), mergeSort(right))
}


// quick sort
const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const sortedArray = quickSort([4, 1, 7, 42, 0, 3, 8, 9, 5])
console.log(sortedArray)
