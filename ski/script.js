function skiBuenden(firstname, lastname, fiscode, GSpos, SLpos, DHpos, SGpos) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.fistcode = fiscode;
  this.GSpos = GSpos;
  this.SLpos = SLpos;
  this.DHpos = DHpos;
  this.SGpos = SGpos;
  testAthlete(this);
}

function testAthlete(obj) {
  let result = [];
  // array 0=GS, 1=SL, 2=DH (speed), 3=SG
  result.push(obj.GSpos);
  result.push(obj.SLpos);
  result.push(obj.DHpos);
  result.push(obj.SGpos);

  // check 3 disciplines
  let sumThree = result[0] + result[1] + result[2];
  let fromThree = sumThree < 3300;

  // check 2 disciplines
  let sumTwoFirst = result[0] + result[1];
  let fromTwoFirst = sumTwoFirst < 2800;

  let sumTwoSecond =
    (result[0] > result[1] ? result[1] : result[0]) + result[2];
  let fromTwoSecond = sumTwoSecond < 1800;

  let solution = `${obj.Firstname} ${obj.Lastname}, 1. ${fromThree} (${sumThree}), 2. ${fromTwoFirst} (${sumTwoFirst}), 3. ${fromTwoSecond} (${sumTwoSecond}) `;

  let elem = document.createElement("p");
  document.body.appendChild(elem);
  elem.innerHTML = solution;
  return solution;
}

let athletes;
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    athletes = data;
    for (let i = 0; i < athletes.length; i++) {
      let small = new skiBuenden(
        athletes[i].Firstname,
        athletes[i].Lastname,
        athletes[i].Fiscode,
        athletes[i].GSpos,
        athletes[i].SLpos,
        athletes[i].DHpos,
        athletes[i].SGpos
      );
      console.log(small);
    }
  })
  .catch((err) => console.error(err));
