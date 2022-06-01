const functionalLanguage = {
  paradigm: 'Functional',
}

const javascript = {
    name: 'javascript',
    year: 1995,
   
};

const scheme = {
    name: 'scheme',
    year: 1960,
};
Object.setPrototypeOf(javascript, functionalLanguage);
Object.setPrototypeOf(scheme, functionalLanguage);

for (const key in javascript) {
    console.log(key, javascript[key]);
}

for (const key in scheme) {
  console.log(key, scheme[key]);
}