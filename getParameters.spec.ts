import getParameters from './getParameters'

test('Get parameters', () => {
  const pathname = '/posts/123/comments/456'
  const pattern = '/posts/:postId/comments/:commentId'

  const params = getParameters(pathname, pattern)

  expect(params).toHaveProperty('postId', '123')
  expect(params).toHaveProperty('commentId', '456')
})
