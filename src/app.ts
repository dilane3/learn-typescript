const btnElement = document.querySelector("#compteur") as HTMLButtonElement
let count: number = 0

function increment(e: MouseEvent): void {
    e.preventDefault()

    count += 1

    if (btnElement instanceof HTMLButtonElement) {
        const span = <HTMLSpanElement>btnElement.querySelector("span")

        span.innerText = count.toString()
    }
}

btnElement.addEventListener("click", increment)
