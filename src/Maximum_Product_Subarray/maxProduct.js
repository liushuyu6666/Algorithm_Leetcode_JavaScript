function maxProduct(nums) {
    let prevMax = nums[0], prevMin = nums[0], ans = nums[0];
    for(let i = 1; i < nums.length; i++) {
        const curr = nums[i];

        const currMax = Math.max(prevMax * curr, Math.max(prevMin * curr, curr));
        const currMin = Math.min(prevMax * curr, Math.min(prevMin * curr, curr));

        ans = Math.max(currMax, Math.max(currMin, ans));

        prevMax = currMax;
        prevMin = currMin;
    }

    return ans;
}
