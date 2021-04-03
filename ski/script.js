let myJSON = [
  {
    Listid: 322,
    Listname: "18th FIS points list 2020/2021",
    Published: 1,
    Sectorcode: "AL",
    Status: "O",
    Competitorid: 238596,
    Fiscode: 512562,
    Lastname: "DE ALMEIDA",
    Firstname: "Mauro",
    Nationcode: "SUI",
    Gender: "M",
    Birthdate: "25.10.2003",
    Skiclub: "Flimserstein Race Team",
    Nationalcode: "SUI",
    Competitorname: "DE ALMEIDA Mauro",
    Birthyear: 2003,
    Calculationdate: "18.03.2021",
    DHpoints: 124.33,
    DHpos: 762,
    DHSta: "*",
    SLpoints: 88.69,
    SLpos: 1985,
    SLSta: "",
    GSpoints: 64.8,
    GSpos: 1250,
    GSSta: "",
    SGpoints: 87.39,
    SGpos: 718,
    SGSta: "",
    ACpoints: 178.1,
    ACpos: 826,
    ACSta: "*",
  },
  {
    Listid: 322,
    Listname: "18th FIS points list 2020/2021",
    Published: 1,
    Sectorcode: "AL",
    Status: "O",
    Competitorid: 238597,
    Fiscode: 512563,
    Lastname: "FLORIN",
    Firstname: "Oliver",
    Nationcode: "SUI",
    Gender: "M",
    Birthdate: "26.11.2003",
    Skiclub: "Parpan",
    Nationalcode: "SUI",
    Competitorname: "FLORIN Oliver",
    Birthyear: 2003,
    Calculationdate: "18.03.2021",
    DHpoints: 122.53,
    DHpos: 747,
    DHSta: "",
    SLpoints: 75.72,
    SLpos: 1511,
    SLSta: "",
    GSpoints: 83.04,
    GSpos: 1898,
    GSSta: "",
    SGpoints: 99.89,
    SGpos: 945,
    SGSta: "",
    ACpoints: 141.72,
    ACpos: 601,
    ACSta: "",
  },
];

function testAthlete(obj) {
  let result = [];
  // array 0=GS, 1=SL, 2=DH (speed), 3=SG
  result.push(obj.GSpos);
  result.push(obj.SLpos);
  result.push(obj.DHpos);
  result.push(obj.SGpos);

  console.log(result);

  // check 3 disciplines
  let sumThree = result[0] + result[1] + result[2];
  let fromThree = sumThree < 3300;

  // check 2 disciplines
  let sumTwoFirst = result[0] + result[1];
  let fromTwoFirst = sumTwoFirst < 2800;

  let sumTwoSecond =
    (result[0] > result[1] ? result[1] : result[0]) + result[2];
  let fromTwoSecond = sumTwoSecond < 1800;

  let solution = `${obj.Firstname} ${obj.Lastname}, aus 3 Disziplinen (SL+GS+DH): ${fromThree} (${sumThree}), aus 2 Disziplinen (SL+GS): ${fromTwoFirst} (${sumTwoFirst}), aus 2 Disziplinen (SL od. GS+DH): ${fromTwoSecond} (${sumTwoSecond}) `;

  return solution;
}

let athletes;
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    athletes = data;
    let mauro = testAthlete(athletes[0]);
    let oliver = testAthlete(athletes[1]);

    //console.log(typeof data);
  })
  .catch((err) => console.error(err));
