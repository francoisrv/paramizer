# paramizer

Helper with url params such as `/posts/:postId`

## Install

```bash
npm install paramizer
```

## Matches

Check if a pathname matches a paramized pathname

```js
import { matchesPattern } from 'paramizer'

if (matchesPattern(location.href, '/posts/:postId')) {
  // ...
}
```

## Get parameters

Get parameters values

```js
import { getParameters } from 'paramizer'

const pathname = '/posts/123/comments/456'
const pattern = '/posts/:postId/comments/:commentId'

const params = getParameters(pathname, pattern)
console.log(params)
{
  postId: '123',
  commentId: '456'
}
```

## Apply parameters

Apply values to parameters

```js
import { applyParameters } from 'paramizer'

const pattern = '/posts/:postId/comments/:commentId'

const pathname = applyParameters(pattern, { postId: '1', commentId: '2' })
console.log(pathname)
// '/posts/1/comments/2'
```
