// buy low sell high to get maximumm profit

function maximumProfit(arr){
    let minPrice = arr[0];
    let maxProfit = 0;

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < minPrice){
            minPrice = arr[i]
        }else{
            let currentProfit = arr[i] - minPrice;
            maxProfit = Math.max(maxProfit, currentProfit);
        }
        
    }
    return maxProfit
}

let arr = [7, 1, 5, 3, 6, 4]
console.log(maximumProfit(arr));