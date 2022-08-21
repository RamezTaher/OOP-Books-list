const personPrototypes = {
  greeting: function () {
    return `hello there ${this.firstName} ${this.lastName}`
  },
}

const ramez = Object.create(personPrototypes)
ramez.firstName = "Ramez"
ramez.lastName = "Taher"
ramez.age = 19
console.log(ramez.greeting())

const mohamed = Object.create(personPrototypes, {
  firstName: { value: "Mohamed" },
  lastName: { value: "Traversy" },
  age: { value: 20 },
})

console.log(mohamed.greeting())
