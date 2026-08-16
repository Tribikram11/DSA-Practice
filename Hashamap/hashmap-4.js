// two sum

function checkSum(arr, target){

    let map = new Map();

    for(let i = 0; i < arr.length; i++){
        let complement = target - arr[i];

        if(map.has(complement)){
            
            return [map.get(complement), i]
        }
        map.set(arr[i], i)
    }


}

console.log(checkSum([1,1,1,2,3,4,5,6], 8))