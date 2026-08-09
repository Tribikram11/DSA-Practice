// reverse string

function reverseString(str){
    let arr = str.split("")

    for(let i = 0; i < Math.floor(arr.length/2); i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - (i+1)];
        arr[arr.length - (i+1)] = temp;
    }
    let newStr = arr.join("")
    // let newStr = str.split("").reverse().join("");
    return newStr;
}

console.log(reverseString("asdfg"))