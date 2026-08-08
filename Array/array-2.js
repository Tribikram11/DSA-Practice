// return the index of maximum element
function maxElement(arr){
    let maxIdx = 0;
    for (let i = 1; i < arr.length; i++){
        
        if(arr[i] > arr[maxIdx]){
            maxIdx = i;     
        }  
    }
    return maxIdx;
}
let arr= [3,1,4,6,2,5,7]
console.log(maxElement(arr))