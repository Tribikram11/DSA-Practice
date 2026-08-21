// Given a sorted array, remove duplicates in-place and return the new length (no extra array).

function removeDuplicate(arr){
    let left = 0;

    for(let right = 1; right < arr.length; right++){
        if(arr[left] !== arr[right]){
            left++;
            arr[left] = arr[right];
            
        }

    }

    return left+1;
}

console.log(removeDuplicate([1,2,3,4,4,5,5,6,6,6]))