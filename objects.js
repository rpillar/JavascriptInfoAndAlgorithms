let obj = {
    "name": "Richard",
    "age": 21
}

console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))

let nameObj = {
    "Richard": {
        "name": "Richard",
        "age": 21
    },
    "Dawn": {
        "name": "Dawn",
        "age": 22
    },
    "Sam": {
        "name": "Sam",
        "age": 18
    }
}
// display the 'keys' in the specified object
console.log(Object.keys(nameObj))
/* returns the 'keys' of the objects that 'match' */
let d1 = Object.keys(nameObj).filter(function(name) { return nameObj[name].age > 20 })
console.log('What are the keys')
console.log(d1)

let nameObjArray = [
    {
        "name": "Richard",
        "age": 21
    },
    {
        "name": "Dawn",
        "age": 22
    },
    {
        "name": "Sam",
        "age": 18
    }
]
/* processes an 'array' of objects returning a filtered array matching the specified condition */
let d2 = nameObjArray.filter(o => { return o.age > 20 })
console.log(d2)

// Note - when defining an object property as a function
// you 'have' to use the 'function' keyword ....
const x = {
    person: {
        name: "Richard",
        age: 21
    },
    repr: function() {
        return this.person
    }
}
console.log(x.repr())

// creating an empty object and adding key / value data - where the values are arrays.
let myObj = {}
myObj["d1"] = []
myObj["d1"].push("d1")
myObj["d1"].push("d2")
console.log(myObj)

// if you want to 'inspect' an object there are a number of different ways :-
console.log(obj)
console.dir(obj)
for ( const prop in obj ) {
    console.log(`My property - ${prop} is : ${obj[prop]}` )
}
