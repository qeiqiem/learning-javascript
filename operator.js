"use strict";
// 1. String concatenation

console.log("my" + "cat");

console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
// $ 변수값 포함

// 6. or 연산자는 여러개 중 하나가 true로 반환되면 뒤의 것은 출력하지 않음
//  ex.
const a = false;
const b = 2 < 4;
const c = false;

console.log(`or: ${a || b || c}`);

// 인 경우, log는 a는 거짓이므로 b를 실행, b는 true로 반환되니 c는 연산하지 않음
// b연산 후 true이므로 true로 반환

// 만약 c가 함수거나, 가장 복잡한 연산일 때 console log등 충력시 가장 마지막으로 배치해야 데이터 효율을 증가시킨다.
// 헤비하면 느려짐! 비교적 간단한 단일값인 a, b를 먼저 연산하는게 맞음
// && 연산자도 마찬가지!!!

// 7. Equality
// == : 값만 평가
// === : 타입까지 평가 => 주로 이걸 사용해서 코딩하는게 좋다.
//
// loop quiz

// Q1;
for (let i = 0; i <= 10; i++) {
  if (i != 0 && i % 2 == 0) {
    console.log(i);
  }
}
// 여기서 조건문을 이렇게 쓰지 않고
//  if(i % 2 === 0) 이렇게 쓰면 좀 더 보기 간편.

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    //   2로 나눈 나머지가 0이 아니면 , 즉 홀수이면
    continue;
    // continue == 스킵하라. 스킵하고 짝수만 출력하게 됨.
  }
}

// Q2.

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 8) {
    break;
  }
}
