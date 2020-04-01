class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce(function(a, b) {
            return a + b;
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const numberOfSides = this.countSides
        let i = 0;
        for(i; i < numberOfSides; i++) {
            if(this.perimeter - this.sides[i] < this.sides[i]) return false;
        }
        return true;
    }
}

class Square extends Polygon {
    get isValid() {
        const sideLength = this.sides[0];
        return this.sides.every(side => side === sideLength);
    }
    get area() {
        return this.sides[0] * this.sides[1];
    }
}