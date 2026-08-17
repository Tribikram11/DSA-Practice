// find maximum difference between two elements

function findMaxDifference(arr){
    let min = arr[0];
    let maxDifference = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }else{ 
            let difference = arr[i] - min;
            maxDifference = Math.max(difference, maxDifference)
        }
    }
    return maxDifference
}

console.log(findMaxDifference([7, 1, 5, 3, 6, 4]))