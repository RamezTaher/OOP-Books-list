// String

const name = "Ramez"
const name1 = new String("Ramez")

// name1.x = "added value"

// console.log(name)
// console.log(name1)

// Number

const num = 5
const num1 = new Number(5)

// console.log(num)
// console.log(typeof num1)

// Boolean
const bool = true
const bool1 = new Boolean(true)
// console.log(typeof bool1)

// Function
const addTwoNums = function (x, y) {
  return x + y
}

// console.log(addTwoNums(1, 1))

const addTwoNums1 = new Function("x", "y", "return x + y")
// console.log(addTwoNums1(1, 1))

// Object
const ramez = { name: "ramez" }
const ramez1 = new Object({ name: "ramez" })

// Array
const arr = [1, 2, 3, 4]
const arr1 = new Array([1, 2, 3, 4])

// Regular Expressions

const re1 = /\w+/
const re2 = new RegExp("\\w+")

console.log(re1)
console.log(re2)
