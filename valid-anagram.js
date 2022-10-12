var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  };

  let letterCount = {};

  //add all the letter into letterCount and the number of times it appear in the sentence
  for (let letter of s) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1
    } else {
      letterCount[letter] += 1
    }
  }

  for (let letter of t) {
    if (letterCount[letter] === undefined) {
      return false
    }

    if (letterCount[letter] < 1) {
      return false
    }

    letterCount[letter] -= 1
  }

  console.log(letterCount)
  return true
};

console.log(isAnagram("abcchg", 'abcchgd'))
