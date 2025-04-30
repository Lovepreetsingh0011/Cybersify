const Sample = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 22,
    Pass: null,
    children: [
      {
        name: "Ella",
        age: 7,
        toys: [
          { name: "Dollhouse", type: "pretend play" },
          { name: "Lego", type: "construction" },
        ],
      },
      {
        name: "Liam",
        age: 5,
        toys: [{ name: "Race Car", type: "vehicle" }],
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 23,
    Pass: null,

    children: [
      {
        name: "Zoe",
        age: 10,
        toys: [{ name: "Puzzle", type: "educational" }],
      },
    ],
  },
  {
    id: 3,
    name: "Charlie Davis",
    age: 28,
    Pass: null,
    children: [],
  },
  {
    id: 4,
    name: "Dana Lee",
    age: 39,
    Pass: null,
    children: [
      {
        name: "Mia",
        age: 6,
        toys: [{ name: "Stuffed Bear", type: "plush" }],
      },
      {
        name: "Max",
        age: 8,
        toys: [
          { name: "Drone", type: "tech" },
          { name: "Board Game", type: "strategy" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Ethan Wright",
    age: 33,
    Pass: null,

    children: [
      {
        name: "Ben",
        age: 4,
        toys: [{ name: "Blocks", type: "construction" }],
      },
    ],
  },
  {
    id: 6,
    name: "Fiona Green",
    age: 30,
    Pass: null,

    children: [
      {
        name: "Lucy",
        age: 9,
        toys: [
          { name: "Barbie", type: "doll" },
          { name: "Coloring Book", type: "art" },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "George Baker",
    age: 45,
    Pass: null,

    children: [
      {
        name: "Oliver",
        age: 11,
        toys: [{ name: "Soccer Ball", type: "sports" }],
      },
    ],
  },
  {
    id: 8,
    name: "Hannah Adams",
    age: 37,
    Pass: null,

    children: [],
  },
  {
    id: 9,
    name: "Ian Martinez",
    age: 41,
    Pass: null,

    children: [
      {
        name: "Sophie",
        age: 7,
        toys: [{ name: "Tea Set", type: "pretend play" }],
      },
    ],
  },
  {
    id: 10,
    name: "Jasmine Patel",
    age: 32,
    Pass: null,

    children: [
      {
        name: "Aryan",
        age: 6,
        toys: [
          { name: "Robot", type: "tech" },
          { name: "Marbles", type: "classic" },
        ],
      },
      {
        name: "Nina",
        age: 3,
        toys: [{ name: "Teddy", type: "plush" }],
      },
    ],
  },
];

let NewArr = [];

function Checking() {
  Sample.forEach((m) => {
    if (m.age > 25) {
      let obj = {
        Name: "",
        Age: 0,
        id: "",
        Childrens: [
          {
            Name: "",
            Age: "",
            Toys: 0,
          },
        ],
      };

      obj.Name = m.name;
      obj.Age = m.age;
      obj.id = m.id;
      if (m.children?.length > 0) {
        m.children?.forEach((k) => {
          obj.Childrens.push({
            Name: k.name,
            Age: k.age,
            Toys: Array.isArray(k.toys) ? k.toys.length : 0,
          });
        });
      }
      NewArr.push(obj);
    }
  });
  console.log(JSON.stringify(NewArr, null, 2));
}
Checking();
