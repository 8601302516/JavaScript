// Strings, number, boolean, null, undefined, symbol

const name = 'Jhone';
const age = 30;

// Concatenation
console.log('My name is ' + name + ' and i am ' + age);

// Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'Hello World';
//console.log(s.substring(0, 5).toUpperCase());
//console.log(s.split(''));

//Array - variable that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('starawberries');
fruits.pop();
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranegs'));
console.log(fruits);