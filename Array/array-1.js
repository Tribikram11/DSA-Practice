// reverse an array in place
function reverseArr(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - (i+1)]
        arr[arr.length - (i+1)] = temp
    }

    return arr;
}
let arr= [3,1,4,2,5]
reverseArr(arr)