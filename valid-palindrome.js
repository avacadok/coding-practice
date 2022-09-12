var isPalindrome = function (s) {
  //use regex to replace all the non-alphanumeric characters
  let replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // use split('') to seperate all the letters and then reverse
  let reverse = replaced.split('').reverse().join('');

  if (replaced == reverse) {
    return true
  }

  return false
};

console.log(isPalindrome('race a car'))