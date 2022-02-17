// 비동기의 하이라이트!

// async & await
// : 깔끔하게 프로미스를 사용하는 방법.
// 프로미스 체이닝을 대신해 더 동기식으로 간편하게 작성하도록 하는 것..
// syntatic sugar!

// 1.async
// 네트웤 통신으로 백엔드 데이터 받아오는게 10sec걸린다..

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("kim");
//     // resolve, reject를 리턴하지 않으면 promise는 pendingt상태에 머무르게 된다.
//     // pending / fulfilled / reject 세 가지 상태로 나뉨
//     // 꼭 resolve, reject 상태로 표기해야 함
//   });
// }
// const user = fetchUser();
//  // user.then(console.log);
// console.log(user);

async function fetchUser() {
  return "kim";
}

const user = fetchUser();
// fetchUser은 결국 promise를 리턴하기 떄문에
user.then(console.log);
console.log(user);

// 2. await **
// async가 붙은 함수 안에서만 쓸 수 있음
// 동기적인 코드를 쓰는 것처럼.
// 지정된 시간까지 기다려!

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  // error 발생
  //   throw "error";
  return "Apple";
}

async function getBanana() {
  await delay(1000);
  return "Banana";
}
// then으로 만들었을 경우

// function getBanana(){
//     await delay(3000);
//     then(()=> 'Banana')
// }

// 👹 아래는 또 하나의 콜백지옥!!!🤯
// promise도 너무 중첩적으로 쓰면 이렇게 콜백지옥처럼 된다.

// function pickF() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// pickF().then(console.log);

async function pickF() {
  const ap = await getApple();
  //   error처리를 하지 않았기 때문에 throw error에서 언코트 에러 발생
  const ba = await getBanana();
  return `${ap}+${ba}`;
}
pickF().then(console.log);
// 동기적으로 코드작성하듯 쓸 수 있다.

// async function pickF() {
//     try{
//         const ap = await getApple();
//         const ba = await getBanana();
//     }catch(){
//     }
//     return `${ap}+${ba}`;
//   }
//   pickF().then(console.log);

//   but!! await를 각각 1000ms씩 기다리는데, 서로 기다릴 필요가 없음. 그래서 병렬적 사용이 필요

async function pickFruits() {
  // 이렇게 promise 만들면 만드는 순간 바로 프로미스 내 코드블럭이 실행됨
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const app = await applePromise; // == const ap
  const bana = await bananaPromise;
  return `${app}+${bana}`;
}
// 1초만에 병렬적으로 실행됨
pickFruits().then(console.log);

// 동시다발적으로 병렬적으로 기능 수행할 때  유용한 promise
// 3. Promise API

function pickAllFruits() {
  // all 이라는 API.
  // promise 배열 전달 -> 병렬적으로 모든 프로미스 전달할때까지 기다림
  return Promise.all([getApple(), getBanana()]) //
    .then((fruits) => fruits.join("+"));
}
pickAllFruits().then(console.log);

// 어떤것이든 상관없이 먼저 따지는 하나의 과일만 받아오고 싶다!
// apple:2000ms, banana:1000ms
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
