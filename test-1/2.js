// check if the string is rotation of other string

function checkRotation(str1, str2){
    let newstr = str1 + str1;


    if(str1.length !== str2.length){
        return false
    }
    if(newstr.includes(str2)){
        return true
    }else{
        return false
    }
}

console.log(checkRotation("waterbottle", "rbottlewat"))