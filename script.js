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

<<<<<<< HEAD
let testDuplicate = "aaBBbcde";
let testPow = [12433, 2];
=======
function mutation(arr) {
  let original = arr[0].toLowerCase().split("");
  let letters = arr[1].toLowerCase().split("");
  let i = 0;
  while (i<letters.length) {
    if (original.indexOf(letters[i])<0) {
      return false;
    }
    i++
  }
  return true;
}

let testMut = ["Mary", "Army"];

console.log(mutation(["Mary", "Army"]));



>>>>>>> 0d31cd22197753fb1d1ef7ba75a067e61749a6a9

console.log(duplicateCount("indivisibbbillity"));
console.log(duplicateCount("abBcde"));
console.log(duplicateCount("aabbcde"));
