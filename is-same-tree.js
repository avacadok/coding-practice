//check null first and then check if the values are different or the same

/*
can shorten the first 2 if with
    if (a === null  ||  b === null) {
        return a === b
    }

*/

var isSameTree = function (a, b) {
  //when b or a is null 
  if ((a === null && b !== null) || (a !== null && b === null)) {
      return false
  }
  //when both are null
  //check if they are both null first because it would not have a value if its null (error checking b.val and a.val)
  if (a === null && b === null) {
      return true
  }

  //if both are not null and value arent the same
  if (b.val !== a.val) {
      return false
  }
  
  //only return true when both return true
  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
};