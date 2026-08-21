// // Given a sorted array, return true if there exists a pair of elements that sum to a given target.

function checkpair(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let sum = 0;

    while(left < right){
        sum = arr[left] + arr[right];

        if(sum === target){
            return true
        }else if(sum < target){
            left++
        }else{
            right--;
        }
    }
    return false
}

console.log(checkpair([1, 2, 4, 7, 11, 15], 15)); // true (4 + 11)
console.log(checkpair([1, 2, 3, 9], 8));          // false.
