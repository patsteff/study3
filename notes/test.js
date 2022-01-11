let y = 3;
let x = 3 + y;

const value = add(x,y);

(value > 10) ? console.log("big") : console.log("small");

function add(a,b) {
    debugger;
    return a + b;
}

console.log(0.3333333333333333 * 3 === 1);  //true
console.log(99999999999999999);                             //100000000000000000
console.log(Number.isSafeInteger(99999999999999999));           //false

console.log(3/0);                                    //Infinity
console.log(0/0);                                //NaN
console.log( Math.pow(2,10000));                 //Infinity
console.log( -Math.pow(2,10000));                //-Infinity

let div0 = 3 / 0;
console.log("jetzt kommt")
console.log( div0);                         //Infinity kommt
console.log( typeof(div0));              //number
console.log( parseInt("abc"));           //NaN
console.log( div0 == NaN);                 //false
console.log(NaN == NaN)                // immer false
console.log("is it true?")      
console.log( isNaN(3/0));                //false (typeof -> number)

console.log( +(true));                          //1
console.log( +(false));                      //0
console.log( +("1ab"));                      //NaN
console.log( +("123"));                          //123
console.log( +([]));                            //0
console.log( parseInt("1.8234ab"));             //1
console.log( parseFloat("1.2343ab"));             //1.2343
console.log( parseFloat("1.2a343ab"));             //1.2343
console.log( parseInt("abc"));                    //NaN

console.log("probeprüfung");
console.log(typeof([]));                                    // object
console.log(typeof('blabla'));                                  // string
// console.log(abc); -> abc is not defined
console.log(typeof(NaN));                                       // number

console.log('Line 1\nLine 2')
const namee = "Michael", hobby = "Hike",
a = 4, b = 5;

console.log(`Mein Name ist: ${namee}, 
Hobby: ${hobby}`);

console.log("4" / "2")                                  // 2
console.log("4" - "2")                                    // 2
console.log(10 * 3 + "px")                              // 30px
console.log("px" + 1 - 2 )                               // NaN !!!!!!!
console.log(1 / 0)                                          // Infinity
console.log("3px" + 3 * 2 + "3px")                        // 3px63px
console.log("foo"+ +"abc");                             // fooNaN
console.log("2"- -1);                                       // 3

// UNERWARTETE mit === gleich
console.log("unexpected cases")
console.log([] == false);                                 //true anderst wie ===
console.log("" == false);                                //true anderst wie ===
console.log(null == false);                             //false
console.log(0 == "0");                                 //true
console.log(null == undefined);                       //true ACHTUNG
console.log([1,2] == "1,2");                         //true
console.log(NaN == NaN);                            //false
console.log([] == ![]);                            //true

// mit ===
console.log("with ===")
console.log(false === false);                     //true
console.log(4 === 4);                            //true
console.log(false === false);                    //true

console.log([] === false);                      //false
console.log("" === false);                       //false
console.log(null === false);                      //false
console.log(0 === "0");                           //false
console.log(null === undefined);                 //false
console.log([1,2] === "1,2");                     //false
console.log(NaN === NaN);                       //false
console.log([] === ![]);                        //false

const undef = undefined;
console.log(undef || 1);                            // 1

const zero = 0;
console.log(zero || 1);                              // 1

console.log(zero ?? 1);                               // 0
console.log(NaN ?? 1);                               // NaN
// coalescing operator returns its right-hand side operand when its left-hand side operand is null or undefined

const namew = "Michael";
const hobbyw = "Wandern";

// simplified syntax
console.log({namew: namew, hobbyw: hobbyw});        // { name: 'Michael', hobby: 'Wandern' }
console.log({namew, hobbyw});                       // { name: 'Michael', hobby: 'Wandern' }
// use value as key with []
console.log({[namew]: namew, [1 + 1]: hobbyw});         // { '2': 'Wandern', Michael: 'Michael' }

