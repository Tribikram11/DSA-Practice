// Group anagrams together from a list of strings

function groupAnagram(arr){
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].split("").sort().join("");
        if(map.has(str)){
            map.get(str).push(arr[i])
        }else{
           map.set(str, [arr[i]])           
        }
        
    }
    return [...map.values()];
    
}


console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))