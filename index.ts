export function camelToDash(string:string):string {
    let result = string.replace(/[A-Z]/g, '-$&').toLowerCase()

    return result
}