"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
console.log('Circle ' + myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(20, 15, 20, 30);
console.log('Rectangle ' + myRectangle.getInfo());
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculatedArea());
    console.log();
}
