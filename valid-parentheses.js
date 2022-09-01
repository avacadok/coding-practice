/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

const isValid = (s) => {
  //use the stack to add all the opening parentheses -- '[', '{' and '('
  let stack = [];

  for (let i = 0; i < s.length; i++) {

    let lastParenthese = stack[stack.length - 1];

    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')' && lastParenthese === '(' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === '}' && lastParenthese === '{' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === ']' && lastParenthese === '[' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  //stack.length should be 0 if all the parentheses have a opening and close in the right order
  return stack.length === 0;

}