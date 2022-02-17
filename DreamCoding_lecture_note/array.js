// array

"use strict";

//2. Index Position

const fruit = ["apple", "banana", "kiwi", "cherry"];
console.log(fruit);
console.log(fruit.length);
// console.log(fruit['key'])
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[5]); // undefined
console.log(fruit[fruit.length - 1]); // ==console.log(fruit[3]);

console.log("반복문 출력");
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

console.clear();
// 1. for loop 사용

// 2. for of
for (let f of fruit) {
  console.log(f);
}

/////////////////////////////////////////////////////////
// 3. forEach
// fruit.forEach(function (element, index, array) {
//   console.log(element, index, array);
// });
fruit.forEach(function (ffoso, i, a) {
  console.log(ffoso, i, a);
});
// 콜백함수..

// + 엘리는 fruits로 배열을 생성했고, 나는 단수로 임의로 생성해서 따라했는데,
// forEach 출력시 element부분에 단수형으로 써도 출력이 되길래 왜 되는건지 모름.
// (fruit으로 선언한 부분이 어디에도 없었음)
// 검색했더니 element밖에 안나와서 일단 저 부분이 element라는 건 알겠고
// 다시 알파벳 임의로 아무거나 넣어서 출력하니까 출력됨.
// 고로, 아무거나 넣어도 되나봄. 위치에 따라 다른것............

// 보통 forEach에서는 array 받아오지 않음
fruit.forEach(function (fruit, index) {
  console.log(fruit, index);
});

// 이름이 없는 함수는 arrow 함수로 작성가능하기 때문에
fruit.forEach((fruit, index) => console.log(fruit, index));
fruit.forEach((fruit) => console.log(fruit));
//

console.clear();

///////////////////////////////////////////////////////
// 4. 배열에 값을 add, delete, copy

// add => push
fruit.push("berry", "orange");
console.log(fruit);
// ["apple", "banana", "kiwi", "cherry", "berry", "orange"]

// remove => pop (하나를 뺴 오는 느낌)
fruit.pop();
console.log(fruit);
// ["apple", "banana", "kiwi", "cherry", "berry"]
// 가장 뒤의 인덱스가 빠짐

fruit.pop();
console.log(fruit);
// ["apple", "banana", "kiwi", "cherry"]

// pop & push

// *********************
// pop과 push는 리턴값이 있다.
// const res = fruit.pop()
// 으로 값을 받아올 수도 있다.

// 앞에서부터 데이터 조작

//add
fruit.unshift("berry", "orange");
console.log(fruit);
// ["berry", "orange", "apple", "banana", "kiwi", "cherry"]

//remove 2번
fruit.shift();
fruit.shift();
console.log(fruit);
// ["apple", "banana", "kiwi", "cherry"]

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// shift, unshift는 pop, push보다 엄청나게 느리다.

// 지정된 포지션에서 지우는 것
// splice
console.clear();
fruit.push("berry", "peach", "lemon");
console.log(fruit);
// (7) ["apple", "banana", "kiwi", "cherry", "berry", "peach", "lemon"]

// fruit.splice(1);
// console.log(fruit);
// index[0]인 apple만 남는다. ==> 원하는 개수를 지정하지 않았기 떄문
// fruit.splice(시작인덱스, 원하는 개수);
// console.clear();
fruit.splice(1, 1);
console.log(fruit);
// (6) ["apple", "kiwi", "cherry", "berry", "peach", "lemon"]
// banana 지워짐

// Q. 인덱스 1번째자리부터 1개만 지우고, '개'와 '소'를 넣어줘
fruit.splice(1, 1, "개", "소");
console.log(fruit);
// (7) ["apple", "개", "소", "cherry", "berry", "peach", "lemon"]

//  Q. 데이터를 지우지 않고 원하는 자리에 추가만 하고 싶다면?
fruit.splice(1, 0, "개", "소");

// 두가지 배열을 묶기
const fruit2 = ["podo", "grape"];
const newFruit = fruit.concat(fruit2);
console.log(newFruit);
// (9) ["apple", "개", "소", "cherry", "berry", "peach", "lemon", "podo", "grape"]

///////////////////////////////////////
// 5. searching
console.clear();
console.log(fruit);
fruit.splice(1, 2);
console.log(fruit);
// (5) ["apple", "cherry", "berry", "peach", "lemon"]

// indexOf, includes, lastIndexOf
console.log(fruit.indexOf("lemon")); // 4
console.log(fruit.includes("lemon")); // true
console.log(fruit.indexOf("be")); // -1 : 아니다.
console.log(fruit.includes("be")); // false

console.clear();
console.log(fruit);
// (5) ["apple", "cherry", "berry", "peach", "lemon"]
// 맨마지막에 apple을 추가해서 중복된 값이 있을때
fruit.push("apple");
console.log(fruit);
// (6) ["apple", "cherry", "berry", "peach", "lemon", "apple"]

console.log(fruit.indexOf("apple")); // 0
// indexOf : 가장 첫번째 나오는 값을 출력함

console.log(fruit.lastIndexOf("apple"));
// lastIndexOf : 가장 마지막의 index값을 출력함
