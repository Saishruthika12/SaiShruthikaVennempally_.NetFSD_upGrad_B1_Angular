class Shape{
    calculateArea(){
        console.log("area is not defined");
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    calculateArea(){
        let area=Math.PI*this.radius*this.radius;
        console.log("circle area:",area.toFixed(2))
    }
}
class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width=width;
        this.height=height;
    }
    calculateArea(){
        let area=this.width*this.height;
        console.log("rectangle area",area);
    }
}
class Triangle extends Shape{
    constructor(base,height){
        super();
        this.base=base;
        this.height=height;
    }
    calculateArea(){
        let area=0.5*this.base*this.height;
        console.log("triangle area:",area);
    }
}
let shapes=[new Circle(5),new Rectangle(4,6),new Triangle(8,5)];
for(let shape of shapes){[
    shape.calculateArea()
]}