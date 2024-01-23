console.log("HELLO WORLD this is just an example..");

function add234(a: number, b: number, callback: (num: number) => void) {
  const added = a + b;
  console.log(added);
}

function addabfun(ab: number) {
  console.log(ab);
}

add234(10, 20, addabfun);

function callabtest(a: number): number {
  console.log(a);
  return a;
}

const person = { name: 'narendra', age: 30 };

console.log(person);
const personObj = { ...person };
console.log(personObj);
person.name = 'ramesh';
console.log(person);
console.log(personObj);
