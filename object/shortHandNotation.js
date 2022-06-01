const title = 'Clean Code';
const author = 'Robert C. Martin';
const pages = 464;
const language = 'English';
const available = true;

const book = {
  title,
  author,
  pages,
  language,
  available,
};

/*
antigamente ultilizava-se assim
mas se eu tiver a variavel com o mesmo nome da chave
eu nao preciso colocar o nome da chave
title: title,
author: author,
pages: pages,
language: language,
available: available,
*/



console.log(book);