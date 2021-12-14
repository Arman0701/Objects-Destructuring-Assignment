'use strict'

// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The
// circles constructed must have two methods getArea() (PIr^2) and getPerimeter() (2PI*r) which give both
// respective areas and perimeter (circumference).

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return Math.PI*(this.radius ** 2);
    }
    getPerimeter(){
        return Math.PI*2*this.radius;
    }
}

let circle1 = new Circle(11);
let circle2 = new Circle(4.44);

console.log(circle1.getArea(), circle1.getPerimeter());
console.log(circle2.getArea(), circle2.getPerimeter());