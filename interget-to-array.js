//from 123 to [1,2,3]

function integerToArray (string) {
  //change the number to string and then use split("") turn it into an array
  // return string.toString().split("").map(Number)
  //split("") will split "123" to ['1', '2', '3']
  //split(" ") will split "123" to [ '123' ] only split spaces

  console.log("split", string.toString().split(" "))
  let arr = string.toString().split("")
  let output = arr.map(Number)
  return output;
}
console.log(integerToArray(123))


//try to use regex to turn integer into an array

//another way to do it will be 
function numToArr(num) {
  const numsArr = Array.from(String(num), Number);
  return numsArr
}

console.log(numToArr(4567))


const hi = (number) => {
  const arrOfStr = Array.from(String(number));

  const arrOfNum = arrOfStr.map(str => Number(str));
  return arrOfNum
}