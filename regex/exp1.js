const statements = 'create table author ( id int, name string, age int, city string, state string, country string,)';

const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatements = statements.match(regexp);
const tableName = parsedStatements[1];
const columns = parsedStatements[2].split(', ');
console.log(columns);
console.log(parsedStatements);

  
 