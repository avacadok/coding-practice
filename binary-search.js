var search = function(nums, target) {
  let output; 
  //loop through all the numbers in nums
  for (let i = 0; i <= nums.length; i++) {
      //return the output with index if they match
      if (nums[i] === target) {
          return output = i;
          
      } else if (nums[i] !== target){
          output = -1;
      }
  }
  return output;
};

console.log(search([1,2,3,4,5,-1], 3))