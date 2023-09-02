export function countElements(nums) {
    const sorted = nums.sort((a, b) => a - b);

    // Remove the smallest elements
    let i = 0;
    while(i < nums.length && nums[i] === nums[0]) {
        i++;
    }
    // Remove the largest elements
    let j = nums.length - 1;
    while(j >= 0 && nums[j] === nums[nums.length - 1]) {
        j--;
    }

    return Math.max(0, j - i + 1);
}
