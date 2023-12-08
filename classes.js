/*
* simple classes in javascript
*/

/* a simple class 'Square' - the 'constructor' method is a special
*  method for creating and initializing an object instance of that
* class
*/

class Square {
    constructor(side) {
        this.side = side
    };
    
    // get area
    get area() {
        return this.calcArea()
    }

    // method - calculate the area of the square
    get calcArea() {
        return this.side * this.side
    }
}

const sq1 = new Square(12)
console.log("My Square - side :" + sq1.side + " and area :" + sq1.area)

/*
* 'static' methods and fields - defined in the class itself instead of each instance.
* useful for 'utility' type methods or fixed 'config like' data - things that don't
* need to be replicated across instances
*/

class Point{
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static displayName = "Point"
    static distance(a, b) {
        const dx = a.x - b.x
        const dy = a.y - b.y

        return Math.hypot(dx, dy)
    }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

console.log("Point displayName : " + Point.displayName)
console.log("p1 displayName : " + p1.displayName) // note - this is undefined ...
console.log("Distance between two Points : " + Point.distance(p1, p2))

/*
* it is also possible to 'declare' fields 'ahead' of the constructor - can make the 
* class easier to understand (self-documenting). 'Default' values can be supplied - 
* if missing then the 'default' is 'undefined'
*/

class Rectangle {
    height = 0
    width = 0
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    // get area
    get area() {
        return this.calcArea()
    }

    // method
    calcArea() {
        return this.height * this.width
    }
}

const r1 = new Rectangle(12, 5)
console.log("My Rectange has an area of : " + r1.area)