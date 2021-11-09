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
