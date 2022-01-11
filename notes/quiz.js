"use strict";

const myObj5 = {myProp: 42};

myObj5.myProp = 17;

myObj5.changeMyProp = function () {
    this.myProp = 33;
    }

myObj5.changeMyProp();

console.log("myObj5.myProp: ", myObj5.myProp);