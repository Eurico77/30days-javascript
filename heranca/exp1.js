const functionalLanguage = {
  paradigm: 'Functional',
}

const javascript = {
    name: 'javascript',
    year: 1995,
    __proto__: functionalLanguage,
};

const scheme = {
    name: 'scheme',
    year: 1960,
    __proto__: functionalLanguage,
};

for (const key in javascript) {
    console.log(key, javascript[key]);
}

console.log(javascript.__proto__.paradigm);
// console.log(scheme);