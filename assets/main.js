const styleCycle = [
    "htReg",
    "htItalic",
    "htBold",
]

const dotSpan = document.querySelector(".dotSpan")
let i = 0

setInterval(() => {
    if (i === styleCycle.length) {
        i = 0
        dotSpan.style.fontFamily = styleCycle[i]
        i = i + 1
    } else {
        dotSpan.style.fontFamily = styleCycle[i]
        i = i + 1 
    }
}, 100);
let spaceSwitch = "bigger"
const dotSpace = document.querySelector(".dotSpace")
let p = 0


setInterval(() => {
    if (spaceSwitch === "bigger") {
        dotSpace.style.letterSpacing = `${p}px`
        p = p + 2
        if (p === 20) {
            spaceSwitch = "smaller"
        }
    } else {
        dotSpace.style.letterSpacing = `${p}px`
        p = p - 2
        if (p === 0) {
            spaceSwitch = "bigger"
        }
    }
}, 100);

