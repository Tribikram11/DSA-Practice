// check for pallindrome

function checkPallindrome(str){
    let arr = str.toLowerCase().replace(/\s/g, "").split("");

    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let element = arr[i];
        if(element === arr[arr.length - (i+1)]){
            
        }else{
            return false
        }
    }
    return true;
}

console.log(checkPallindrome("A man a plan a canal Panama"))