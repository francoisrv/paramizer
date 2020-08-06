export default function applyParameters(
  url: string,
  patterns: { [name: string]: any }
): string {
  return url
    .split(/\//)
    .map((bit) => {
      if (/^:/.test(bit)) {
        const param = bit.replace(/^:/, '')
        if (param in patterns) {
          return patterns[param]
        }
        throw new Error(`paramizer: Missing parameter ${param}`)
      }
      return bit
    })
    .join('/')
}
