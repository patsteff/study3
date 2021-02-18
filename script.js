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



let test = "aaBBbcde";


console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("abBcde"));
console.log(duplicateCount("aabbcde"));
