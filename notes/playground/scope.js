'use strict';

const first = 'wes'; // window.first geht nicht
let second = 'bos';
var ageAnimal = 100; // bei window.ageAnimal kommt 100

function sayHi(){console.log('hi!');}

const age = 100;

function go() {
    const hair = 'blonde';
    const age = 200
    console.log(hair, age);
  }
  
go();
console.log(age);


if (1 === 1) {
    let cool = true;
  }


function isCool(name) {
    let cool;
  
    if (name === 'wes') {
      cool = true;
    }
  
    console.log(cool);
    return cool;
  }