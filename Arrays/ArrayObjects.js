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

arr.forEach((val) => {
  let res = similor?.find((s) => s.Sports === val.Sports);
  if (res) {
    res.Player += val.Player;
  } else {
    similor.push({ Sports: val.Sports, Player: val.Player });
  }
});

console.log(similor);
