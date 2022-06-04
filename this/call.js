const person = {
  name: 'John',
  age: 30,
  job: 'teacher', 
}

function getPerson() {
  // const { name, age, job } = this;
  return ` ${this.name} is ${this.age} years old and works as a ${this.job}`
}


console.log(getPerson.call(person));