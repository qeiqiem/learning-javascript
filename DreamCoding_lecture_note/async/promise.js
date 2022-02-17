"use strict";

// 프로미스 : 자스 내장 오브젝트.
// 비동기적인 것을 수행할 떄 콜백함수 대신에 유용하게 쓰임

// 1. state 상태
//      :프로세스가 헤비한 오퍼레이션을 수행중인지, 완료- 성공인지, 실패인지
// 2. producer, consumer 의 차이점을 아는 것
//      : 제공하는 사람과 데이터를 쓰느 사람
//      : 두가지의 다른 견해를 이해하는 것이 중요

// state : pending(오퍼레이션 수행중) -> fulfilled (완벽하게 성공하면) or rejected(파일찾을수  x, 네트워크 찾을 수 x, 실패)
// producer(=promise object) vs consumer (우리가 소비하느)

// 1. Producer
// promise -> class이기 떄문에 new 로 생성함
// resolve (성공시 전달할), reject (실패시)
const promise = new Promise((resolve, reject) => {
  // 헤비한 일들을 하게 됨....(network, read files..)
  console.log("doing sth");
  //  ** promise를 만드는 순간, 우리가 전달한 excuter라는 함수 바로 실행함
  //  만약 네트워크 통신을 만들었다면 바로 통신을 하게 됨
  //  만약 사용자가 버튼누르거나, 요청시에만 하게 되면,,,
  //       사용자가 요구하지 않았는데도 통신이 됨..그래서 이점 유의할 필요 ㅇ (불필요한 네트워크 통신)

  setTimeout(() => {
    // resolve("kim");
    reject(new Error("no network"));
    // error : 자스 오브젝트..
  }, 2000);
});

// 2. consumers : then, catch, finally... 로 값을 받아올 수 있음
// 밑에 then : promise가 잘 실행이 된다면... ; ~이 되면
//            최종적으로 resovle를 통해 전달된 value가 파라미터로 들어옴
promise //
  .then((value) => {
    console.log(value);
    //   1. resolve일 시 : value전달
    //   2. uncaught error msg
  })
  .catch((error) => {
    //2의 uncaught를 해결하기 위해 catch를 쓰면
    // 에러발생되는게 아니고 에러를 console에 출력해줌
    console.log(error);
  })
  // then은 똑같은 promise를 리턴하기 때문에
  // 그 프로미스의 catch를 리턴?등록?할 수 있다...? ==> chaining이라 함..

  .finally(() => {
    //   성공, 실패에 관계없이 어떤 기능의 마지막에 무조건 실행됨
    console.log("finally");
  });

//   3. Promise chaining
//  4. 에러 헨들링..
// 개어렵다 ㅠ 몬말.. 나진짜 시간 헛보낸듯 훅,, ㅠ
