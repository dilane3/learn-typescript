const btnElement = document.querySelector("#compteur") as HTMLButtonElement
let count: number = 0

function increment(e: MouseEvent): void {
    e.preventDefault()

    count += 1

    if (btnElement instanceof HTMLButtonElement) {
        const span = btnElement.querySelector("span")

        if (span)
            span.innerText = count.toString()
    }
}

btnElement.addEventListener("click", increment)

function consoleSize<Type extends {length: number}>(arg: Type): Type {
    console.log(arg.length)

    return arg
}

const id: Array<number | string> = ["19M2069", 10093]