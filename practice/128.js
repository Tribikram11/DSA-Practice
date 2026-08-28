function longestSequence(arr){
    let set = new Set(arr);
    let maxlength = 0;

    for(let x of set){
        if(!set.has(x-1)){
            let current_length = 1;
            let current  = x;

            while(set.has(current + 1)){
                current += 1;
                current_length += 1;
            }
            maxlength = Math.max(current_length, maxlength)
        }
    }
    
return maxlength
}

console.log(longestSequence([100,2,4,200,1,3,2]))

// discard the duplicates
// if there are two sequences are present then take the longest sequence
