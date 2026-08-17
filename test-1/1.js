// check the array for duplicate element

function checkTwice(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (map.has(item)) {
            return true
        }
        map.set(item, i)
    }
    return false;
}
console.log(checkTwice([2, 1, 3, 4, 5]))
