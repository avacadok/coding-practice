const runningSum = function(nums) {
  let output = [];
  //make a copy of the number
  let count = 0;

  for (let num of nums) {
      //add on the num into count on every num of nums
      count += num;
      output.push(count)
  }
  return output;
};

console.log(runningSum([1,3,7,8]))