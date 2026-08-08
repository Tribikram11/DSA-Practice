// check the array is sorted or not
function sortedArr(arr){

    for(let i = 0; i< arr.length-1; i++){
        if(arr[i] <= arr[i+1]){
            
        }else{
            return false;
        }
    }
    return true
}

let arr = [1,2,2,3,3,4]
console.log(sortedArr(arr));