/*
* Stacks
*/

// functions: push, pop, peek, length

// create a 'stack' using an array
let stack = []

// add data to the 'stack'
stack.push(1)
stack.push(2)
console.log(stack) // [1,2]

// remove data from the 'top' of the stack - the 'end' of the array
stack.pop()
console.log(stack) // [1]

// 'view' the top of the stack
stack.push("Apple")
stack.push("Car")
console.log(stack[stack.length - 1])