/*
* String processing
*/

const forename = "Richard"
// or
const surname = new String("Pillar")

// String properties ...
// =================
console.log("My string is : " + forename.length + " long.")

// String methods (not all of them ...)
// ==============

// concatenate two strings
let myName = forename.concat(surname)
console.log("My full name is : " + myName)

// concatenate more than two strings ...
let myUpdatedName = forename.concat(" ", surname)
console.log("My updated full name is : " + myUpdatedName)
// or you could do :-
let mUN = ''.concat("Richard", " ", "Pillar")
console.log("My updated full name using an empty string ... : " + mUN)

// use the Array 'join' function - specify the 'separator'
let nameElements = ["Richard", "Pillar"]
let n = nameElements.join(' ')
console.log("Another concatenated name : " + n)

// the 'preferred' method of concatenating strings is using the '+' operator
// if the 'left hand side' is a string then Javascript will coerce the 'right side'
// to a string
let anotherWord = 'Hello'
anotherWord += ' '
anotherWord += 'World'
console.log("Concatenation using the '+' operator : " + anotherWord)

// 'split' a string
let myString = "en-uk_dom-reg_sem_ni_nb_x_aware-consider_m_pros_intl_exact-skag_001"
let strElements = myString.split('_')
console.log("My 'split' string : " + strElements)
// or ...
strElements = myString.split('_', 2)
console.log("My 'split' string (first two elements) : " + strElements)

// ..... and many more 

// 'search' for the presence of a regex 'match' in a string
// the 'search' will return the 'index' (zero-based) of the matching regex in 
// the string - or '-1' if it is not found ...
// 'regex' examples found in regex.js
let re1 = /summer/g
let re2 = /Summer/g
let mySearchString = "When will summer start in the UK"
let searchResult1 = mySearchString.search(re1)
let searchResult2 = mySearchString.search(re2)
console.log("The result of a string search is (summer) : " + searchResult1)
console.log("The result of a string search is (Summer) : " + searchResult2)

// the 'indexOf' method works in the same way as for arrays
// giving us the index of the first occurrence of the specified string or
// '-1' if not found
let myNewString = "What am I about to do now"
console.log(myNewString.indexOf("am")) // 5
console.log(myNewString.indexOf("xx")) // -1