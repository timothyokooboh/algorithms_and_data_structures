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


// binary search
const binarySearch = (arr, value) => {
    // assumes data is already sorted

    let startIndex = 0;
    let endIndex = arr.length - 1;

    while(startIndex <= endIndex) {
        let mid = Math.floor((startIndex + endIndex)/2)
        if(value == arr[mid]) {
            return mid;
        }
        else if(value < arr[mid]) {
            endIndex = mid - 1;
        } else if (value > mid) {
            startIndex = mid + 1
        }
    }

    return -1;
}


// determine if a list is sorted

const isSorted = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false
    }

    return true;
}

const res = isSorted([0, 2, 4, 5, 6])
console.log(res)