var twoSum = function(nums, target) {
	const numsObj = {};
	var answer = "Target Not Found";
    for(let i in nums){
        var x = target - nums[i];
        if(x in numsObj){
           var answer = x+" + "+nums[i]+" = "+target;
        }
		numsObj[nums[i]] = x;
    }
  return answer;  
};
