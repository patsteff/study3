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
