class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }


getcolor(){
    return this.color;
}
getradius(){
    return this.radius
}
getarea(){
    return Math.PI*this.radius*this.radius;
}
setcolor(){
    return this.color="red";
}
getCircumference(){
    return Math.PI*(this.radius+this.radius)
}

}
var s1=new Circle(5,"green");
console.log(s1.getcolor());
console.log(s1.getradius());
console.log(s1.getarea());
console.log(s1.setcolor());
console.log(s1.getCircumference());