import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';


let myCircle = new Circle(5, 10, 20);
console.log('Circle ' + myCircle.getInfo());

let myRectangle = new Rectangle(20, 15, 20, 30);
console.log('Rectangle ' + myRectangle.getInfo())

let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculatedArea());
    console.log();
}