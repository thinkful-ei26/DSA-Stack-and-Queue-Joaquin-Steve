'use strict';
// Create node, makes this a linked list
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class _StarTrek {
  constructor(top) {
    this.top = null;
  }

  push(data) {
    // if this.top is null, the stack is empty b/c the constructor sets this.top=null as default. Then, the new node becomes the top, and last item in stack (next === null)
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    // if the stack is not empty, this.top !==null, then the new item becomes the new top, and it's next pointer points to the previous item, now 'below' it in the stack.
    this.top = new _Node(data, this.top);
  }
  pop(data) {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
function peek(stack) {
  let node = stack.top;
  return node.data;
}
function isEmpty(stack) {
  //helper function to check if stack is empty
  let top = stack.top;
  if (!top) return true;
  else return false;
}
function display(stack) {
  let newStack = stack;
  //to display the stack
  while (!isEmpty(newStack)) {
    console.log(newStack.pop());
  }
}

function matchingParenthesis(s) {
  let stack = new _StarTrek();

  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    if (!isEmpty) {
      if (word === '(') stack.push(s[i]);
      if (word === ')') stack.pop();
    }
  }

  return isEmpty(stack);
}

// get a string, push the entire string to a fresh stack.
// create two counters leftside and rightside
// then, pop each character. if that character is '(' increment leftside ++, else rightside ++
// compare counters if !== return false.

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let compareString = '';
  let stack = new _StarTrek();
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]); //push everything onto the stack
  }
  while (!isEmpty(stack)) {
    //pop it off in reverse order and store that in a string
    compareString += stack.pop();
  }
  // console.log('1 ' + compareString)
  // console.log(2, s)
  if (compareString == s) {
    return true;
  } else return false;
}

function match_brackets() {}

function main() {
  // let st = new _StarTrek()
  // st.push('Captain Kirk')
  // st.push('Scotty')
  // st.push('Spock')
  // st.push('McCoy')
  // st.pop()
  // st.peek()
  // display(st)
  // console.log(isEmpty(st))
  //   console.log(is_palindrome('1001'));
  console.log(matchingParenthesis('( ) ) ( )'));
}

main();

module.export = _StarTrek;
// Using the stack class above, implement the following helper functions outside the stack class
// peek: allows you to look at the top of the stack without removing it
// display: to display the stack. What is the first item in your stack?
// Remove McCoy from your stack and display the stack
