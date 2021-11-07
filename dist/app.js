"use strict";
var btnElement = document.querySelector("#compteur");
var count = 0;
function increment(e) {
    e.preventDefault();
    count += 1;
    if (btnElement instanceof HTMLButtonElement) {
        var span = btnElement.querySelector("span");
        span.innerText = count.toString();
    }
}
btnElement.addEventListener("click", increment);
