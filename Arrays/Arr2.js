let a = new Array(5, 2, 3);
let b = Array.of(5);

// console.log(a.length, a);
// console.log(b.length, b);
// find the duplicate value
let duplicate = [];
let arr = [12, 3, 4, 2, 12, 33, 2, 3];
arr.forEach((m, i) => {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] == arr[j + 1]) {
      duplicate.push(m);
    }
  }
});
// console.log(duplicate);

let dec = 1.6;
console.log(Math.floor(dec));
console.log(Math.ceil(dec));
console.log(Math.round(3.4));
console.log(Number.isInteger(2));

// console.log(Math.trunc(dec));
// console.log(Math.round(dec));
