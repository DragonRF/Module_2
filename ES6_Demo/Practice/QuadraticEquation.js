class QuadraticEquation{
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getA()  {
        return this.a
    }
    getB()  {
        return this.b
    }
    getC()  {
        return this.c
    }
    getDiscriminant(){
        return this.b*this.b - 4*this.a*this.c;
    }
    getRoot1(){
        return (-this.b + Math.pow(this.getDiscriminant(), 0.5))/(2*this.a);
    }
    getRoot2(){
        return (-this.b - Math.pow(this.getDiscriminant(), 0.5))/(2*this.a);
    }
}
let quadraticEquation = new QuadraticEquation(1,4,1);
if (quadraticEquation.getDiscriminant() > 0){
    console.log(`x1 = `+quadraticEquation.getRoot1());
    console.log(`x2 = `+quadraticEquation.getRoot2());
}else if (quadraticEquation.getDiscriminant() === 0){
    console.log(`x = `+quadraticEquation.getRoot1());
}else console.log(`The equation has no roots`);