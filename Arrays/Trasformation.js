let arr = [
  {
    id: 1,
    Name: "A",
    Sports: "Footbal",
    Player: 5,
  },

  {
    id: 2,
    Name: "B",
    Sports: "Hockey",
    Player: 10,
  },
  {
    id: 3,
    Name: "C",
    Sports: "Footbal",
    Player: 7,
  },
  {
    id: 4,
    Name: "D",
    Sports: "Badminton",
    Player: 2,
  },
  {
    id: 5,
    Name: "E",
    Sports: "BacketBall",
    Player: 5,
  },
  {
    id: 6,
    Name: "F",
    Sports: "Hockey",
    Player: 10,
  },
];

let similor = [];
// FInd the Common Sports And Also Cal their Player After That Sort The Array
function Test() {
  arr.forEach((val) => {
    let res = similor?.find((s) => s.Sports === val.Sports);
    if (res) {
      res.Player += val.Player;
      res.count++;
    } else {
      similor.push({ Sports: val.Sports, Player: val.Player, count: 1 });
    }
  });

  similor = similor.filter((k) => k.count > 1);
  console.log(similor);

  // similor.sort((a, b) => b.Player - a.Player);
  for (let i = 0; i < similor.length - 1; i++) {
    for (let j = 0; j < similor.length - 1; j++) {
      if (similor[j].Player < similor[j + 1].Player) {
        [similor[j], similor[j + 1]] = [similor[j + 1], similor[j]];
      }
    }
  }

  console.log(similor);
}

Test();

// Reverse Method is USed to Reverse The Array
let Arr = [1, 3, 45, 5, 43];

console.log("Reverse Array");
console.log(Arr.reverse());
