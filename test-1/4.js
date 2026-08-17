// whether the word can be palindromoe or not after re-arrangiing

function checkpalindrome(str) {
    let map = new Map();

    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    let oddcount = 0;

    for(let count of map.values()){
        if(count % 2 !== 0) {
            oddcount++
        }
    }

    return oddcount <= 1;


}

console.log(checkpalindrome("aaabbb"))