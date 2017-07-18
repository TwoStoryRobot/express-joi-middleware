
/* Validation Middleware
 * Check body or query against Joi schema
 */

const Joi = require('joi')

const abortEarly = false
const opts = { abortEarly }

function body(schema) {
  return (req, res, next) => {
    Joi.validate(req.body, schema, opts, err => {
      if (!err) return next()
      res.status(400).send(err)
    })
  }
}
function query(schema) {
  return (req, res, next) => {
    Joi.validate(req.query, schema, opts, err => {
      if (!err) return next()
      res.status(400).send(err)
    })
  }
}

module.exports = { body, query }
