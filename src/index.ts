function camelToDash(stringForConvert:string):string {
    let result = stringForConvert.replace(/[A-Z]/g, '-$&').toLowerCase()

    return result
}

export {
    camelToDash
}