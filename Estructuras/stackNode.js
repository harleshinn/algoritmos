const Node = require('./node')

const Stack = (originalValues = []) => {
  let mainNode = Node(null)

  return {
    push (value) {
      let newNode = Node(value)
      mainNode.next(newNode)
      newNode.previous(mainNode)
      mainNode = newNode
    }, 
    pop () {

    },
    nodes () {
      return mainNode
    }
  }
}

let myStack = Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.nodes().getValue()

module.exports = Stack
