function printAll1(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s)
            }
        } else if (typeof strs === "string") {
            console.log(strs)
        }
    } else {
        console.log(typeof strs)
    }
}

function printAll2(strs: string | string[] | null) {
    if (strs && typeof strs == "object") {
        for (const s of strs) {
            console.log(s)
        }
    } else if (typeof strs == "string") {
        console.log(strs)
    } else {
        console.log(typeof strs)
    }
}

printAll1('')
printAll2(null)
