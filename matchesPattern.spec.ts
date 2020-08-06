import matchesPattern from './matchesPattern'

test('Matches pattern', () => {
  const pathname = '/posts/1234'
  expect(matchesPattern(pathname, '/posts/:postId')).toBe(true)
})
