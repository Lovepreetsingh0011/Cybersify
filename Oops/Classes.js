class Testing {
  constructor(name, age) {
    if (age < 18) {
      console.log("Age is less than 18");
      return;
    }

    this.Name = name;
    this.Age = age;
  }

  Details() {
    console.log(`The Name is ${this.Name} and the Age is ${this.Age}`);
  }
}

const test = new Testing("lovy", 11);
test.Details();
