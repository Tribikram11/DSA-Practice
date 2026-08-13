// find the length of the longest non repeating substring from a string

function findSubString(str){
    let left = 0;
    let maxlen = 0;
    let map = new Map();

    for (let right = 0; right < str.length; right++) {
        let currentchar = str[right];

        if(map.has(currentchar) && map.get(currentchar) >= left){
            left = map.get(currentchar) + 1;
        }

        map.set(currentchar, right);
        maxlen = Math.max(maxlen, right-left + 1)
    }
    return maxlen
}


console.log(findSubString("abcabda"))