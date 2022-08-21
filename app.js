class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, isLogged) {
    super(firstName, lastName)
    this.phone = phone
    this.isLogged = isLogged
  }

  static returnNumber() {
    return 500
  }
}

const john = new Customer("John", "Doe", "5555555", true)
console.log(Person.returnNumber())
