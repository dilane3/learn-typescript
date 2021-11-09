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

function reverse<T>(arr: readonly T[]): T[] {
    return arr.slice().reverse()
}

// les classes
class A {
    private a = 4
    public b = 5
    protected c = 3

    log () {
        console.log(this.a)
    }
}

class B extends A {
    public d = 0

    log() {
        console.log(this.d)
    }
}

const a: A = new B()
a.log()

// abstraction

abstract class Geometry {
    abstract surface (): number
    abstract perimeter (): number

    log () {
        console.log("je suis une forme geometrique")
    }
}

class Carre extends Geometry {
    private cote: number

    constructor (cote: number) {
        super()
        this.cote = cote
    }

    surface(): number {
        return this.cote * this.cote
    }

    perimeter(): number {
        return this.cote * 4
    }
}

const carre = new Carre(6)
console.log(carre.perimeter())