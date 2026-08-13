// retrun the first letter with frequency 1

function checkFreq(str){
    let frequency = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if(frequency[char] === undefined ){
            frequency[char] = 1;
        }else{
            frequency[char]++;
        }   
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if(frequency[char] === 1){
            return i;
        }      
    }
    return -1;
    
}

console.log(checkFreq("akakhh"))