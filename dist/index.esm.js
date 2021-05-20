function camelToDash(stringForConvert) {
  var result = stringForConvert.replace(/[A-Z]/g, '-$&').toLowerCase();
  return result;
}

export { camelToDash };
