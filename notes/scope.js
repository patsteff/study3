//scope browser anders als node (b ist hier undefined)

a = "A"; //wird auf das globale Objekt gelegt
var b = "B"; // wird auf den aktuellen Scope gelegt
let c = "C" // let, const werden nicht mehr auf das globale Objekt gelegt
function foo() {
    d = "D";
    var e = "E";
}

console.log(globalThis.a);     //globalThis = global in node.js; window im Browser
console.log(globalThis.b);     // undefined in node, im browser B
console.log(globalThis.c, c);   // undefined, "C"
console.log(globalThis.d);      // D
console.log(globalThis.e);      // undefined 

// when 'use strict'; -> a is not defined (!)