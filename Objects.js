// // let Obj = {
// //   Name: "Testing",
// //   Age: 12,
// // };

// // Obj.Printme = function () {
// //   console.log(this.Name);
// // };

// // console.log(Obj);

// function Testing(Name, Age) {
//   console.log(Name, Age);
// }

// Testing.prototype.PrintMe = function () {
//   console.log(this.Name);
// };
// // Testing("test", 12);
// let test = new Testing("testing", 12);
// test.PrintMe();

// const company = {
//   name: "Tech Inc",
//   employees: {
//     emp1: { name: "Tom", age: 28 },
//     emp2: { name: "Jerry", age: 32 },
//   },
// };

// for (let key in company.employees) {
//   console.log(company.employees[key].name);
// }

// let obj = {
//   Name: "testing",
//   Age: 21,
// };

// Object.prototype.Test1 = function () {
//   console.log(`${this.Name} Test1 is Called`);
// };

// Object.prototype.Test2 = function () {
//   console.log("Test2 is Called");
// };

// Object.prototype.Test3 = function () {
//   console.log("Test3 is Called");
// };
// Object.prototype.Name = "Testing String";

// obj.Test1();
// console.log(Object.getPrototypeOf(obj));

function Test(name, age) {
  this.name = name;
  this.age;
}

Test.prototype.Test2 = function () {
  console.log(`${this.name} Test2 is run`);
};

const a = new Test("bdh", 21);
a.Test2();
