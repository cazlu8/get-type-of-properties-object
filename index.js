function convertToType(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === 'object'){
      acc[key] = convertToType(value)
    } else {
      acc[key] = typeof value;
    }
    return acc
  }, {})
}

module.exports = convertToType