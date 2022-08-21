// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.birthay = new Date(dob)

  // this.calAge = function () {
  //   const diff = Date.now() - this.birthay.getTime()
  //   const ageDate = new Date(diff)
  //   return ageDate.getUTCFullYear() - 1970
  // }
}

// Calculate Age
Person.prototype.calAge = function () {
  const diff = Date.now() - this.birthay.getTime()
  const ageDate = new Date(diff)
  return ageDate.getUTCFullYear() - 1970
}

// Get Full Name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// Get Married
Person.prototype.getMarried = function (newLastName) {
  this.lastName = newLastName
}

const john = new Person("John", "Doe", "12-20-2002")
const mary = new Person("Mary", "Smith", "10-30-1960")

console.log(john)
console.log(mary.calAge())
console.log(mary.getFullName())
mary.getMarried("Richard")
console.log(mary.getFullName())

console.log(john.hasOwnProperty("firstNme"))
