export default function getParameters(
  url: string,
  pattern: string
): { [param: string]: string } {
  const urlBits = url.split(/\//)
  const patternBits = pattern.split(/\//)
  return patternBits.reduce((parameters, bit, bitIndex) => {
    if (/^:/.test(bit)) {
      const name = bit.replace(/^:/, '')
      return {
        ...parameters,
        [name]: urlBits[bitIndex],
      }
    }
    return parameters
  }, {})
}
