let a1 = new Array(1,2,3,4,5)
let a2 = [1,2,3,4,5]

console.log(typeof(a1)) // object
console.log(a1.length) // note that 'length' is a 'property' of an array not a function 'on' an array

console.log(typeof(a2))
console.log(a2.length)

// to check if an 'object' is an 'Array'
let b = Array.isArray(a1)
console.log(b) // 'true'

console.log(a1.indexOf(3)) // returns '2' - in javascript we have '0' based array indexing
console.log(a1.indexOf(8)) // returns '-1' as the element '8' cannot be found in the array

console.log(a1[-1]) // returns 'undefined'

// concatenate two arrays ...
let a3 = [1,2,3,4,5]
let a4 = ["Richard", "Dawn", "Sam"]
let a5 = a3.concat(a4)
console.log(a5)

// 'every' - return an boolean if 'every' element meets a condition
let a6 = [1,2,3,4,5,6,7,8]
let a7 = [6,7,8,9]
const isBigger = (element, index, array) => {
    return (element > 4)
}
let bool1 = a6.every(isBigger)
console.log(bool1)
let bool2 = a7.every((element, index, array) => {
    return (element > 4)
})
console.log(bool2)

// 'filter' an array - return a new array containing the elements that pass the specified condition
let a8 = [1,2,3,4,5,6,7,8,9]
let a9 = a8.filter((element, index, array) => {
    return (element > 4)
})
console.log(a9)

// 'loop' over an array running a function on each element
let a10 = [1,2,3,4,5,6]
a10.forEach((element, index, array) => {
    console.log('The element - ' + element + ' (at index : ' + index + ') when multiplied by 2 is ' + (element * 2) )
})
