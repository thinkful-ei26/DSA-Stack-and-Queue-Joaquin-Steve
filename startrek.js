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

// function peek(st) {
//   const node = this.top;
//   return node;
// }

function main() {
  let st = new _StarTrek();

  st.push('Captain Kirk');
  st.push('Scotty');
  //   st.push('Spock');
  //   st.push('McCoy');
  //   st.pop();
  //   st.peek();
  display(st);
  //   console.log(isEmpty(st));
  //   console.log(peek(st));
  //   console.log(JSON.stringify(st.peek()));
}

main();

// Using the stack class above, implement the following helper functions outside the stack class
// peek: allows you to look at the top of the stack without removing it
// display: to display the stack. What is the first item in your stack?
// Remove McCoy from your stack and display the stack
