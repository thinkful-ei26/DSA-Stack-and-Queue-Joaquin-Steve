'use strict'

const Stack = require('./startrek')

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  console.log(s)
  let st = new Stack()
  st.push('hey')
  console.log(st)
}

// true, true, true
console.log(is_palindrome('dad'))
// console.log(is_palindrome('A man, a plan, a canal: Panama'))
// console.log(is_palindrome('1001'))
// console.log(is_palindrome('Tauhida'))
