// function arguments
function foo(name){
    console.log(name);
    console.log(arguments.length);
    // Ausgabe aller Parameter...
    for(let i = 0; i< arguments.length; i++)
    {
    console.log(i, arguments[i]);
    }
    // ...oder als Array
    console.log(Array.from(arguments).join("\n"));
    }
    
console.log(foo("Michael", "Gfeller", "OST", "IFS"));
console.log(foo("Michael"));

function foo2(name, ...params) {
    console.log(1,name); // 1 Michael
    console.log(2,params.join(";")); // 2 Gfeller;OST;IFS
}

foo2("Michael", "Gfeller", "OST", "IFS");

//scope browser anders als node (b ist hier undefined)

af = "A"; //wird auf das globale Objekt gelegt
var bf = "B"; // wird auf den aktuellen Scope gelegt
let c = "C" // let, const werden nicht mehr auf das globale Objekt gelegt
function foo() {
    d = "D";
    var e = "E";
}

console.log(globalThis.af); //globalThis = global in node.js; window im Browser
console.log(globalThis.bf); // undefined in node, im browser B
console.log(globalThis.c, c);
console.log(globalThis.d);
console.log(globalThis.e);

// console.log("why this is an error");
// const abuur = function print(){
//     console.log("HI");
// };
// print();

console.log("paintWhite");

function House (color) {
    this.facadeColor = color;
    this.paintWhite = function() {
        this.facadeColor = "white";
    };
}
const house = new House("red");
console.log(house);
setTimeout(house.paintWhite, 100);
console.log(house.paintWhite);

function makeObj (val) {
    let _prop = val;
    const incProp = () => ++_prop;
    return {incProp};
}

const myObj7 = makeObj(42);
console.log(myObj7.incProp());
myObj7._prop = 17;
console.log(myObj7);
console.log("myObj7.myProp: ", myObj7.incProp());

function makeObj (val) {
    let _prop = val;
    const incProp = () => ++_prop;
    return {incProp};
}

const myObj8 = makeObj(42);
console.log("myObj8.myProp: ", myObj8.incProp(), ",myObj7.myProp: ", myObj7.incProp());

