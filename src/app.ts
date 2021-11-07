const btnElement = document.querySelector("#compteur")
let count = 0

const increment = (e: any) => {
    count += 1

    const span = btnElement?.querySelector("span")

    if (span)
        span.innerText = count.toString()
}

btnElement !== null && btnElement.addEventListener("click", increment)