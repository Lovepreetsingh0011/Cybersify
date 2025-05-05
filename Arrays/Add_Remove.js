// find the only numeric value

let MixedArr = [
  1,
  2,
  22,
  true,
  false,
  "dd",
  "dee",
  "@",
  "#",
  0,
  45,
  6,
  -7,
  -77,
  -0,
];
let ood = [];
let even = [];
function test(value) {
  if (value > 0 || (value == 0 && value !== true)) return true;
  if (value < 0) return true;
  return false;
}
MixedArr.forEach((m) => {
  if (test(m)) {
    if (m % 2 == 0) {
      even.push(m);
    } else {
      ood.push(m);
    }
  }
});

// console.log(ood);
// console.log(even);

// *********************************************************
// Create a method to Add New Students

let Students = ["st1", "st2", "st3"];
function AddStudents(value) {
  value.forEach((m) => Students.push(m));
}

// *********************************************************

// Create a method to Remove  Students

function RemoveStudents(value) {
  Students = Students.filter((m) => {
    if (!value.includes(m)) return m;
  });
}

// console.log(Students);

// AddStudents(["s", "ss"]);

// console.log(Students);
// RemoveStudents(["s", "st3"]);

// console.log(Students);

// *********************************************************

// For Remove the Last value of the Array
function RemoverLastElement() {
  Students.pop();
  console.log(Students);
}

// RemoverLastElement();

// *********************************************************

// For Remove the Firsr Value of the Array

function RemoveFirstElement() {
  Students.shift();
  console.log(Students);
}
// RemoveFirstElement();

// *********************************************************

// For Add Elements In the First Index of the Array

function UnshiftElements(value) {
  if (value.length < 0) {
    console.log("Data is Emplty");
  } else {
    value.forEach((m) => {
      Students.unshift(m);
    });
  }
  console.log(Students);
}
// UnshiftElements(["test1", 12]);

let MixedArrr = [
  1,
  2,
  22,
  true,
  false,
  "dd",
  "dee",
  "@",
  "#",
  0,
  45,
  6,
  -7,
  -77,
  -0,
];
let oodd = [];
let evenn = [];

MixedArr.forEach((m) => {
  if (!isNaN(m) && m !== true && m !== false) {
    if (m % 2 == 0) {
      evenn.push(m);
    } else {
      oodd.push(m);
    }
  }
});

console.log(oodd);
console.log(evenn);

// Concationation
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 22, 43, 235];
let arr3 = ["s", "d", "dw", 43, 235];
console.log(" 2 Array Concat", arr1.concat(arr2));
console.log(" 3 Array Concat", arr1.concat(arr2, arr3));
