// move all the zeros to the end without disturbing the order
function sortZero(arr){
    let pointer = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] !== 0){
            let temp  = arr[pointer]
            arr[pointer] = arr[i];
            arr[i] = temp;
            pointer++
        }


    }
    return arr
}

let arr = [1,0,3,0,4,9,0,2]
console.log(sortZero(arr))