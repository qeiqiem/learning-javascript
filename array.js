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
