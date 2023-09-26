export function minSubArrayLen(target, nums) {
    let i = 0, j = 1, sum = nums[0], ans = 0;
    
    while(j <= nums.length) {
        if (sum >= target) {
            ans = ans === 0 ? j - i : Math.min(ans, j - i);
            sum -= nums[i];
            i++;
        } else {
            if(j === nums.length) break;
            sum += nums[j];
            j++;
        }
    }

    return ans;
}
