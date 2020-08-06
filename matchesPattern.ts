export default function matchesPattern(
  pathname: string,
  pattern: string
): boolean {
  const urlBits: string[] = pathname.split(/\//);
  const patternBits: string[] = pattern.split(/\//);
  const bits = urlBits.map((urlBit, index) => {
    if (/^:/.test(patternBits[index])) {
      return true;
    }
    return urlBit === patternBits[index];
  });
  return bits.every(Boolean);
}
