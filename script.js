function duplicateCount(text){
  //...
  let words = text.toLowerCase().split('');
  let count = 0;
  let x = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
        if (words[i] === words[j]) {
          x++;
          }
      }
    if (x>1) {
      count++;
    }
    x=0;
    }
    return count/2;
  }

function tryAgain() {
  alert("Hello! I am an alert box!!");
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

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





let test = "aaBBbcde";


console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("abBcde"));
console.log(duplicateCount("aabbcde"));
