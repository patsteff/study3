let y = 3;
let x = 3 + y;

const value = add(x,y);


(value > 10) ? console.log("big") : console.log("small");

function add(a,b) {
    debugger;
    return a + b;
}

console.log(0.3333333333333333 * 3 === 1);  //true
console.log(99999999999999999);  //100000000000000000
console.log(Number.isSafeInteger(99999999999999999)); //false

console.log(3/0);              //Infinity
console.log( Math.pow(2,10000));  //Infinity
console.log( -Math.pow(2,10000)); //-Infinity

let div0 = 3 / 0;
console.log("jetzt kommt")
console.log( div0);             //NaN (Infinity kommt)
console.log( typeof(div0));     //number
console.log( parseInt("abc"));  //NaN
console.log( div0 == NaN);      //false
console.log( isNaN(div0));      //true

console.log( +(true));               //1
console.log( +(false));              //0
console.log( +("1ab"));              //NaN
console.log( +("123"));              //123
console.log( +([]));                 //0
console.log( parseInt("1.8234ab"));     //1
console.log( parseFloat("1.2343ab"));   //1.2
console.log( parseInt("abc"));       //NaN

console.log("probeprüfung");
console.log(typeof([]));
console.log(typeof('blabla'));
// console.log(abc); -> abc is not defined
console.log("type of Nan");
console.log(typeof(NaN));

console.log('Line 1\nLine 2')
const namee = "Michael", hobby = "Hike",
a = 4, b = 5;

console.log(`Mein Name ist: ${namee}, 
Hobby: ${hobby}`);

console.log("4" / "2") // 2
console.log("4" - "2") // -2
console.log(10 * 3 + "px") // 30px
console.log("px" + 1 - 2 ) // NaN !!!!!!!
console.log(1 / 0) // Infinity
console.log("3px" + 3 * 2 + "3px") // 3px63px
console.log("foo"+ +"abc"); // fooabc
console.log("2"- -1); // 3

// UNERWARTETE
console.log([] == false);          //true
console.log("" == false);          //true
console.log(null == false);        //false
console.log(0 == "0");             //true
console.log(null == undefined);    //true
console.log([1,2] == "1,2");       //true
console.log(NaN == NaN); //false
console.log([] == ![]);            //true$

const namew = "Michael";
const hobbyw = "Wandern";

// simplified syntax
console.log({namew: namew, hobbyw: hobbyw});  // { name: 'Michael', hobby: 'Wandern' }
console.log({namew, hobbyw}); // { name: 'Michael', hobby: 'Wandern' }
// use value as key with []
console.log({[namew]: namew, [1 + 1]: hobbyw}); // { '2': 'Wandern', Michael: 'Michael' }

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
    
    foo("Michael", "Gfeller", "OST", "IFS");

function foo2(name, ...params){
    console.log(1,name); // Michael
    console.log(2,params.join(";")); // Gfeller;OST;IFS
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

foo();

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

