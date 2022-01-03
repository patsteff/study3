function myFunction() {
    let inner = 5;
    function getInner() {
        return inner;
    }
    return getInner;
}

let getInnerPr = myFunction();
let innerValue = getInnerPr();
console.log(innerValue);


function Dog() {}

Dog.prototype.breed = "Bulldog";
Dog.age = 12;

myDog = new Dog();
console.log(myDog.age);
console.log(myDog.__proto__);