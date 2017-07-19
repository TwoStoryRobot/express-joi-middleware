# express-joi-middleware

Middleware to validate request body or parameters against a Joi schema.

## Usage

```javascript
const Joi = require('joi')
const express = require('express')
const bodyParser = require('body-parser')
const validate = require('@twostoryrobot/express-joi-middleware')

const app = express()

const querySchema = Joi.object().keys({
  user: Joi.string().guid().required()
})

const bodySchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).required(),
  password: Joi.string().min(4).required()
})

app.use(bodyParser.json())
app.get('/user', validate.query(querySchema), getUser)
app.post('/user', validate.body(bodySchema), postUser)
```

## API

### `query(schema)`

Validates a request's query parameters against the supplied schema.

* `schema` - A Joi schema

**Example**

```javascript
const querySchema = Joi.object().keys({
  user: Joi.string().guid().required()
})

app.get('/user', validate.query(querySchema), getUser)
```

### `body(schema)`

Validates a request's body against the supplied schema.

* `schema` - A Joi schema

**Example**

```javascript
const bodySchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).required(),
  password: Joi.string().min(4).required()
})

app.post('/user', validate.body(bodySchema), postUser)
```

## Installation

```
npm install @twostoryrobot/express-joi-middleware
```

## License

Unlicensed
