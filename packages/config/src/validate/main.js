const { cyan } = require('chalk')

const { VALIDATIONS } = require('./validations')
const { getExample } = require('./example')

// Validate the configuration file.
// Performed before normalization.
const validateConfig = function(config) {
  try {
    VALIDATIONS.forEach(({ property, ...validation }) => {
      validateProperty(config, { ...validation, nextPath: property.split('.') })
    })
  } catch (error) {
    error.cleanStack = true
    throw error
  }
}

// Validate a single property in the configuration file.
const validateProperty = function(
  parent,
  {
    nextPath: [propName, nextPropName, ...nextPath],
    prevPath = [propName],
    propPath = propName,
    key = propName,
    required,
    check,
    message,
    example,
  },
) {
  const value = parent[propName]

  if (nextPropName !== undefined) {
    return validateChild({
      value,
      nextPropName,
      prevPath,
      nextPath,
      propPath,
      key,
      required,
      check,
      message,
      example,
    })
  }

  if (value === undefined) {
    return checkRequired({ value, required, propPath, prevPath, example })
  }

  if (check !== undefined && check(value, key, parent)) {
    return
  }

  throw new Error(`Configuration property ${cyan.bold(propPath)} ${message}
${getExample({ value, key, prevPath, example })}`
}

// Recurse over children (each part of the `property` array).
const validateChild = function({ value, nextPropName, prevPath, nextPath, propPath, ...rest }) {
  if (value === undefined) {
    return
  }

  if (nextPropName !== '*') {
    return validateProperty(value, {
      ...rest,
      prevPath: [...prevPath, nextPropName],
      nextPath: [nextPropName, ...nextPath],
      propPath: `${propPath}.${nextPropName}`,
      key: nextPropName,
    })
  }

  return Object.keys(value).forEach(childProp =>
    validateChildProp({ childProp, value, nextPath, propPath, prevPath, ...rest }),
  )
}

// Can use * to recurse over array|object elements.
const validateChildProp = function({ childProp, value, nextPath, propPath, prevPath, ...rest }) {
  if (Array.isArray(value)) {
    const key = Number(childProp)
    return validateProperty(value, {
      ...rest,
      prevPath: [...prevPath, key],
      nextPath: [key, ...nextPath],
      propPath: `${propPath}[${childProp}]`,
      key,
    })
  }

  validateProperty(value, {
    ...rest,
    prevPath: [...prevPath, childProp],
    nextPath: [childProp, ...nextPath],
    propPath: `${propPath}.${childProp}`,
    key: childProp,
  })
}

// When `required` is `true`, property must be defined, unless its parent is
// `undefined`. To make parent required, set its `required` to `true` as well.
const checkRequired = function({ value, required, propPath, prevPath, example }) {
  if (!required) {
    return
  }

  throw new Error(`Configuration property ${cyan.bold(propPath)} is required.
${getExample({ value, prevPath, example })}`)
}

module.exports = { validateConfig }
