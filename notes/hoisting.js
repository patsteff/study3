console.log(age);
var age = 10;       // undefined

console.log(page);
const page = 10;       // Cannot access 'page' before initialization





sayHi(); // this code block works

function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

function add(a, b){
  return a + b;
}