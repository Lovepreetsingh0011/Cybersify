let Students = [12, 21, 32, 3, 43, "df", "rr", 3];
let Count = 0;
// foreach Method Its Dosenot return any value its always return undefined

function ForeachMethod() {
  Students.forEach((m) => {
    if (Number.isInteger(m)) {
      return (Count += m);
    }
  });
  console.log(Count, "count");
}
// ForeachMethod();

/****************************************************** */
// Map Method Return a New Array from calling a function for every element
// its doesnot modified the orignal Array

function MapMehtod() {
  let NewArr = [];
  NewArr = Students.map((m) => {
    if (Number.isInteger(m)) {
      return m * 2;
    } else return m;
  });
  console.log(NewArr);
}

// MapMehtod();

/****************************************************** */
// Filter Method Create a new Array that spesify the condition

function FilterMethod() {
  let NewArr = [];
  NewArr = Students.filter((m) => {
    if (Number.isInteger(m)) {
      return m;
    }
  }).map((k) => {
    return k * 2;
  });
  console.log(NewArr);
}

// FilterMethod();

/****************************************************** */

// Some Methdo return boolen value when the condtion is pass or not

function SomeMethod() {
  let res = Students.some((m) => m < 18);
  if (res) console.log("some Value is less than 18");
  else console.log("All vaues is Greater than 18");
}

// SomeMethod();
let a = " ";
let b = "d";
let c = "d";
if ([a, b, c].includes([""])) {
  console.log(true);
}
// if ([a, b, c].some((m) => m.trim() == "")) {
//   console.log(true);
// }

// ***************************************************

// let Teachers = [
//   { Name: "A", Age: 21, Teach: "Eng" },
//   { Name: "B", Age: 23, Teach: "Math" },
//   { Name: "C", Age: 31, Teach: "Eng" },
//   { Name: "D", Age: 21, Teach: "Science" },
// ];

// // Find The Teachcer base on Sub

// function FindTeacher(subject) {
//   const result = Teachers.filter((teacher) => {
//     return teacher.Teach === subject;
//   });
//   console.log(result);
// }

// FindTeacher("Eng");

// let Teacher = ["A", "B", "C", "D"];
// let subject = ["Eng", "Math", "Science", "Eng"];

// // For Get Teachers And subjects
// function FindData(val) {
//   let teacher = Teacher.indexOf(val);

//   if (teacher >= 0) {
//     let sub = subject[teacher];
//     let res = subject.find((m) => m === sub);
//     return res;
//   } else {
//     let ind = subject.indexOf(val);

//     if (ind < 0) return false;
//     let indarr = [];
//     subject.forEach((m, i) => {
//       if (m == val) indarr.push(i);
//     });
//     // console.log(indarr);

//     let teacharr = [];

//     indarr.forEach((k) => {
//       teacharr.push(Teacher[k]);
//     });
//     return teacharr;
//   }
// }

// console.log(FindData("C"));

let Teacher = ["A", "B", "C", "D"];
let subject = ["Eng", "Math", "Science", "Eng"];

// For Get Teachers And subjects
function FindData(val) {
  let teacher = Teacher.indexOf(val);

  if (teacher >= 0) {
    let sub = subject[teacher];
    let res = subject.find((m) => m === sub);
    return res;
  } else {
    let ind = subject.indexOf(val);

    if (ind < 0) return false;
    let indarr = [];
    subject.forEach((m, i) => {
      if (m == val) indarr.push(i);
    });
    // console.log(indarr);

    let teacharr = [];

    indarr.forEach((k) => {
      teacharr.push(Teacher[k]);
    });
    return teacharr;
  }
}
// console.log(FindData("C"));

function AddTeacherAndSubject(name, ind, sub) {
  console.log(Teacher);
  console.log(subject);
  for (let i = Teacher.length; i > ind; i--) {
    Teacher[i] = Teacher[i - 1];
  }

  Teacher[ind] = name;

  for (let i = subject.length; i > ind; i--) {
    subject[i] = subject[i - 1];
  }

  subject[ind] = sub;

  console.log(Teacher);
  console.log(subject);
}

// AddTeacherAndSubject("M", 2, "Hindi");

// Buuble Sort Algo

function BubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(BubbleSort([2, 3, 23, 5, 33, 22, 45]));

// Reducer Method
//It’s a method that processes an array and returns just one final result, whether that’s a number, object, string, array, etc.

const arr = [23, 32, 12, 3, 4];

function ForSumAllelemets() {
  let ress = arr.reduce((acc, curn) => {
    return acc + curn;
  }, 0);
  console.log("Sum of ALL values");
  console.log(ress);
}

// ForSumAllelemets();

// for Find Max Value

function FindMax() {
  let ress = arr.reduce((acc, curn) => {
    return acc < curn ? curn : acc;
  }, 0);
  console.log("Max Value");

  console.log(ress);
}

// FindMax();

// for Find Min Value
// [23, 32, 12, 3, 4];

function FindMin() {
  let ress = arr.reduce((acc, curn) => {
    console.log(acc);

    return acc > curn ? curn : acc;
  });
  console.log("Min Value");

  console.log(ress);
}

FindMin();

// Every Mehtod

function EveryMethod() {
  let res = arr.every((m) => m > 18);
  console.log("EveryMethod");

  console.log(res);
}
EveryMethod();
