function crap(x, bags, cap){
  let listCrap = [];
  if (bags == 0) {
    return "Cr@p"
  } else {
        for (let i = 0; i < x.length; i++) {
          if (x[i].indexOf("@")>=0) {
          listCrap.push(x[i].indexOf("@"));
          console.log(listCrap.length);
          }
     }
    if (bags == listCrap.length) {
      return "Clean";
    } else {
      return "Cr@p";
    }
  }
}

testCrapi = ['_','_','_','_'], ['_','_','_','@'], ['_','_','@','_']], 2, 2);

console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@','_']], 2, 2));


function digPow(n, p){
  // ...
  let arr = n.toString().split('').map(Number);
  let result = function factorial
  console.log(arr[2]);
}

function pow(x) {

}



function duplicateCount(text) {
    // this function will count duplicates in a string (i.e. aaeeiar will return 2)
  let words = text.toLowerCase().split('');
  let counts = {},
  duplicate = 0;
  words.forEach(function(x) {
  counts[x] = (counts[x] || 0) + 1;
});

for (var key in counts) {
  if (counts.hasOwnProperty(key)) {
    counts[key] > 1 ? duplicate++ : duplicate;
  }
}

return duplicate;
}

function tryAgain() {
  alert("Hello! I am an alert box!!");
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

let testDuplicate = "aaBBbcde";
let testPow = [12433, 2];

console.log(duplicateCount("indivisibbbillity"));
console.log(duplicateCount("abBcde"));
console.log(duplicateCount("aabbcde"));
