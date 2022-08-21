// const ramez = {
//   name: "ramez",
// }

// console.log(ramez)
// console.log(ramez.age)

// Person constructor

function Person(name, bod) {
  this.name = name
  // this.age = age
  this.birthday = new Date(bod)
  this.calcAge = function () {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

const ramez = new Person("ramez", "12-20-2002")

console.log(ramez.calcAge())


