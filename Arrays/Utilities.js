// Join Method is used to join the element of the array into String
let NumericArray = [1, 2, 3, 4, 4, 5, 6];

function JoinMethod() {
  let newArr = NumericArray.join(" ");
  console.log("Join Mehtod");
  console.log(typeof newArr, newArr);
}

JoinMethod();

// Split method is used to divided a string into array of substring based on specified sperated

let Str = "My Name is Lovepreet singh";

function SplitMethod() {
  let res = Str.split(" ");
  console.log("Split Mehtod");
  console.log(res);
}

SplitMethod();

// ToString is similor to the join(",")
function TostringMethod() {
  let newArr = NumericArray.toString();
  console.log("ToString Mehtod");
  console.log(typeof newArr, newArr);
}

TostringMethod();

// Array From method Create a Array from a string

function FromMethod() {
  let a = "ABCD";
  console.log("Array From Mehtod");

  console.log(Array.from(a));
}

FromMethod();
// const arr1 = [1, 2, [3, 1, 4]];
// console.log(arr1.flat()); // Output: [1, 2, 3, 4]

// const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr2.flat()); // Output: [1, 2, 3, 4, [5, 6]]
// console.log(arr2.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

// const arr3 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// console.log(arr3.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
const blogPosts = [
  { id: 1, title: "Intro to JS", tags: ["javascript", "programming"] },
  { id: 2, title: "CSS Tricks", tags: ["css", "design"] },
  { id: 3, title: "React Guide", tags: ["react", "javascript"] },
];

const allTags = blogPosts.flatMap((post) => post.tags);
console.log(allTags);

// const res = blogPosts.map((m) => m.tags);
// console.log(res);

// Output: ["javascript", "programming", "css", "design", "react", "javascript"]
