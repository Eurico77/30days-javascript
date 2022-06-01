const functionalLanguage = {
  paradigm: 'Functional',
}

const javascript = Object.create(functionalLanguage);
javascript.name = 'javascript';
javascript.year = 1995;


const scheme = Object.create(functionalLanguage);
scheme.name = 'scheme';
scheme.year = 1960;


for (const key in javascript) {
  console.log(key, javascript[key]);
}

for (const key in scheme) {
console.log(key, scheme[key]);
}

console.log(Object.getPrototypeOf(javascript).paradigm);