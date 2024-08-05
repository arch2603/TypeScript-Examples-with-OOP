import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';


// let myShape = new Shape(10, 15);
// console.log('Shape ' + myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log('Circle ' + myCircle.getInfo());

let myRectangle = new Rectangle(20, 15, 20, 30);
console.log('Rectangle ' + myRectangle.getInfo())

let theShapes: Shape[] = [];

// theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);