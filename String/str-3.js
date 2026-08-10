// check for anagram

function checkAnagram(str1, str2){
    let arr1 = str1.split("").sort().join("")
    let arr2 = str2.split("").sort().join("")

    if(arr1 !== arr2){
        return false;
    }

    return true;
}

console.log(checkAnagram("abc", "abcd"))