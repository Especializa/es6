const sayHello = name => `Hello ${name}`;
const printHello = (name) => {
  console.log(`Hello ${name}`);
};
const getSiblings = n => ({ previous: n - 1, next: n + 1 });

console.log(sayHello);
console.log(sayHello('Jose'));
printHello('Berardo');
console.log(getSiblings(10));
