// group the common elements from both array

function commonElement(arr1, arr2) {
    let map = new Map();
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], i)
        if (map.has(arr1[i])) {
            continue
        }
    }


    let newarr = new Set();
    for (let i = 0; i < arr2.length; i++) {
        if (map.has(arr2[i])) {
            newarr.add(arr2[i])
        }
    }
    return [...newarr];
}

console.log(commonElement([1, 2, 3, 4, 1, 4], [7, 5, 4, 3, 3]))