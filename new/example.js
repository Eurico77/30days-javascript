const _new = function (constructor, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  constructor.call(obj, args)
  return obj
}

const Person = function (name, age, year) {
  this.name = name;
  this.age = age;
  this.year = year;
}

const person1 = _new(Person, 'John', 30, 1990);
console.log(person1);