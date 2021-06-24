// callback, 비동기처리

"use strict";

// synchronous
// 자스 -> 동기적
// 호이스팅이 된 이후부터 작성 순서대로 실행됨
// 호이스팅? var, 함수선언이 가장 위로 올라가는 것

// <-> asynchronous 바동기
// 언제 코드가 실행될 지 예측할 수 없는 것
// ex setTimeout()

console.log("1");

// 브라우저에 요청 후 바로 3출력으로 넘어감.
setTimeout(function () {
  console.log("2");
}, 1000);

setTimeout(() => console.log("2"), 1000);

console.log("3");

// synchronous callback
// asynchronous callback

//////////////
// 더러운 콜백 예제참조
