# objectify-response

- Returns 200 from all server responses regardless the server returns with status code 400 and up.
- Helps you avoid sending 400 and up status codes to your client-side applications.
- Gives you cleaner responses displayed browser console.

## Installation

```shell
npm install --save objectify-response
```

## Importing

```js
import objectifyResp from 'objectify-response'; // ES6
var objectifyResp = require('objectify-response'); // ES5 with npm
```

## Dependencies
```http-status```

## Usage
**Example**

```js
router.post('/', async (req, res) => {
    const token = generateToken()
    return objectifyResp(res, token)
})
```

```js
    ...
    return objectifyResp(res, 'Item is not found.', 404)
```

## Returns
Returns 200 from all server responses.

**Example return from the first usage example.**

HTTP/1.1 200 OK
```js
{ 
    code: 200
    name: 'OK' //auto generated name of the error based on the error code.
    message: 'Returns the generated token string'
}
```

**Example return from the second usage example.**

HTTP/1.1 200 OK
```js
{ 
    code: 404
    name: 'NOT_FOUND' //auto generated name of the error based on the error code.
    message: 'Item is not found.'
}
```