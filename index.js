function findMinAndRemove(array) {
    let min = array[0],
        minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            minIndex = i;
        }
    }
    array.splice(minIndex, 1)
    return min;
}

function selectionSort(array) {
    let sortedArray = [];
    while (array.length > 0) {
        let min = findMinAndRemove(array)
        sortedArray.push(min)
    }
    return sortedArray;
}
