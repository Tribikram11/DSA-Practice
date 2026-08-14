// check an array if it contain any duplicate

function checkDuplicate(arr){
    let map = new Map();

    for( let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            return true
        }
        map.set(arr[i], i)
    }
    return false;
}


console.log(checkDuplicate([1,2,3,4]))
console.log(checkDuplicate([1,2,3,1]))