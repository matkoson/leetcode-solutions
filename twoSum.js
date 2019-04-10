function twoSum(nums, target) {
	let controler = target, indexes = [];
	for(let i = 0; i< nums.length; i+=1){
		const fittingNum = target - nums[i];
		if (nums.includes(fittingNum)&& nums.indexOf(fittingNum)!==i){
			return [i, nums.indexOf(target-nums[i])]
		}
	}
}

console.log(twoSum([3,2,4], 6));