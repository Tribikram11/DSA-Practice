// find a sub array whose sum will be maximum (kadane's algorithm)

function maxSumOfSubArray(arr){
    let currentSum = 0;
    let maxSum = -Infinity ;

    for (let i = 0; i < arr.length; i++) {
        currentSum = currentSum + arr[i];
        maxSum = Math.max(currentSum,maxSum);
        
        if(currentSum < 0){
            currentSum = 0;
        }
        
    }
    return maxSum;
}


console.log(maxSumOfSubArray([-3,-2,-1]))