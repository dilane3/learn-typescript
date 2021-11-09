"use strict";
const btnElement = document.querySelector("#compteur");
let count = 0;
function increment(e) {
    e.preventDefault();
    count += 1;
    if (btnElement instanceof HTMLButtonElement) {
        const span = btnElement.querySelector("span");
        if (span)
            span.innerText = count.toString();
    }
}
btnElement.addEventListener("click", increment);
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const id = ["19M2069", 10093];
function reverse(arr) {
    return arr.slice().reverse();
}
// les classes
class A {
    constructor() {
        this.a = 4;
        this.b = 5;
        this.c = 3;
    }
    log() {
        console.log(this.a);
    }
}
class B extends A {
    constructor() {
        super(...arguments);
        this.d = 0;
    }
    log() {
        console.log(this.d);
    }
}
const a = new B();
a.log();
// abstraction
class Geometry {
    log() {
        console.log("je suis une forme geometrique");
    }
}
class Carre extends Geometry {
    constructor(cote) {
        super();
        this.cote = cote;
    }
    surface() {
        return this.cote * this.cote;
    }
    perimeter() {
        return this.cote * 4;
    }
}
const carre = new Carre(6);
console.log(carre.perimeter());
