// 3sum

function threeSum(arr) {
    arr.sort((a, b) => a - b)
    let result = [];

    for (let i = 0; i < arr.length-2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue
        }
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {

            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]])
                left++;
                right--;
                while (left < right && arr[left] === arr[left - 1]) {
                    left++;
                }

                while (left < right && arr[right] === arr[right + 1]) {
                    right--;
                }

                
            } else if (sum < 0) {
                left++
            } else {
                right--;
            }
        }
    }
    return result;

}

console.log(threeSum([-2, -1, -1, -1, -1, 0, 0, 0, 1, 2, 2, 5, 5, 7, 9]))
