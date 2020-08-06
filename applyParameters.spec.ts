import applyParameters from './applyParameters'

test('Apply parameters', () => {
  const pattern = '/posts/:postId/comments/:commentId'

  const pathname = applyParameters(pattern, { postId: '1', commentId: '2' })

  expect(pathname).toEqual('/posts/1/comments/2')
})
