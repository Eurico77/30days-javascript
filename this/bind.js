const calculateArea = function (fn) {
  return fn(Math.PI * Math.pow(this.radius, 2));
}

const circle = {
  radius: 10,
  calculateArea
}

const calculateAreaForCircle = calculateArea.bind(circle, Math.round);
console.log(calculateAreaForCircle());