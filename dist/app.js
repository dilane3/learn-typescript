"use strict";
var btnElement = document.querySelector("#compteur");
var count = 0;
var increment = function (e) {
    count += 1;
    var span = btnElement === null || btnElement === void 0 ? void 0 : btnElement.querySelector("span");
    if (span)
        span.innerText = count.toString();
};
btnElement !== null && btnElement.addEventListener("click", increment);
