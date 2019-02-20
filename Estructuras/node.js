const Node = function (defaultValue = 1) {
  let value = defaultValue
  let previous = null
  let next = null

  return {
    setValue(newValue) {
      value = newValue
    },
    getValue() {
      return value
    },
    next(newNode) {
      if (newNode != null) {
        next = newNode
      } else {
        return next
      }
    },
    previous(newNode) {
      if (newNode != null) {
        previous = newNode
      } else {
        return previous
      }
    }
  }
}

module.exports = Node