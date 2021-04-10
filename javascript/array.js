"use strict";

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

console.clear();
//3.Looping over an array
//print all fruits

//for of
for (let i of fruits) {
  console.log(i);
}

//forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push("딸기", "복숭아");
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();

console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift("딸기", "레몬");
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//note! shift, unshift are slower than pop, push
//splice: romove an item by inex position

fruits.push("딸기", "복숭아", "레몬");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "풋사과", "수박");
console.log(fruits);

// combine two arrays
const fruits2 = ["배", "코코넛"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("풋사과"));
console.log(fruits.indexOf("수박"));
console.log(fruits.indexOf("웅앵"));

// includes
console.log(fruits.includes("수박")); //가지고 있는 데이터인지 아닌지
console.log(fruits.includes("웅앵"));

// lastIndexOf()
console.clear();
fruits.push("사과");
console.log(fruits);
console.log(fruits.indexOf("사과")); //처음 만나는 인덱스 출력
console.log(fruits.lastIndexOf("사과")); //마지막 사과의 인덱스 출력
