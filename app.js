// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person("Ramez", "Taher")

// console.log(person1.greeting())

// Customer Constructor
function Customer(firstName, lastName, phone, isLogged) {
  Person.call(this, firstName, lastName)
  this.phone = phone
  this.isLogged = isLogged
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype)

// Make customer prototype return Customer
Customer.prototype.constructor = Customer

const customer1 = new Customer("foulen", "foulen", "5555555", "true")
console.log(customer1.greeting())

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}
console.log(customer1.greeting())
