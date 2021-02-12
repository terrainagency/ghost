export function objectToArray(object) {
    let arr = []
    for (const [key, value] of Object.entries(object)) {
        let obj = {}
        obj[key] = value
        arr.push(obj)
    }
    return arr
}