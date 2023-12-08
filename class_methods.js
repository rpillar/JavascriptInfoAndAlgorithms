/*
* there are different ways of defining class 'methods'
*/

class Circle {
    constructor(radius) {
        this.radius = radius
        this.desc   = ''
    }

    pi = 3.14
    // the 'get' syntax allows you to define 'public instance getters that
    // can be treated as 'properties'
    get area () {
        return this.pi *  Math.pow(this.radius, 2)
    }

    get circumference () {
        return 10
    }

    /**
     * using the 'set' syntax - create a public instance setter that
     * is treated as a 'property'
     * @param {string} d
     */
    set description(d) {
        this.desc = d
    }
}

const c1 = new Circle(6)
console.log("The area of the circle is : " + c1.area)
c1.description = "My circle" // note - format : description is treated like a 'property'
console.log("The circle - " + c1.desc + " has an area of : " + c1.area)