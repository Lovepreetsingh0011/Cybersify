let arr = [
  {
    id: 1,
    Name: "A",
    Sports: "Footbal",
    PlayerNames: ["A", "b", "c"],
    Player: 5,
  },

  {
    id: 2,
    Name: "B",
    Sports: "Hockey",
    PlayerNames: ["d", "B"],
    Player: 10,
  },
  {
    id: 3,
    Name: "C",
    Sports: "Footbal",
    PlayerNames: ["hh", "jih", "HH"],
    Player: 7,
  },
  {
    id: 4,
    Name: "D",
    Sports: "Badminton",
    PlayerNames: ["As", "bss", "swc"],
    Player: 2,
  },
  {
    id: 5,
    Name: "E",
    Sports: "BacketBall",
    PlayerNames: ["Ams", "bjd", "chd"],
    Player: 5,
  },
  {
    id: 6,
    Name: "F",
    Sports: "Hockey",
    PlayerNames: ["Asd", "sdb", "sc"],
    Player: 10,
  },
];

let res = arr.flatMap((m) => {
  return m.PlayerNames;
});

console.log(res);
