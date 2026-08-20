// Given a sorted array, return true if there exists a pair of elements that sum to a given target.

function hasPairWithSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const currentSum = nums[left] + nums[right];

        if (currentSum === target) {
            return true;
        } else if (currentSum < target) {
            left++;  // Need a larger sum
        } else {
            right--; // Need a smaller sum
        }
    }

    return false;
}

// Example Usage:
console.log(hasPairWithSum([1, 2, 4, 7, 11, 15], 15)); // true (4 + 11)
console.log(hasPairWithSum([1, 2, 3, 9], 8));          // false