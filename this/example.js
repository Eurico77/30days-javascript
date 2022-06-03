const rectangle = {
  x: 10,
  y: 20,
  calculateArea() {
    console.log(this);
    return this.x * this.y;
  }
};

rectangle.calculateArea();

// outra maneira de usar o this, e por meio de referencia de objeto
// function calculateArea() {
//   console.log(this);
//   return this.x * this.y;
// }
// const rectangle = {
//   x: 10,
//   y: 20,
//   calculateArea,
// };
// rectangle.calculateArea();