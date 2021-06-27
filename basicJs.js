"use strict";

// 1. 기능을 수행하고 끝나는 함수

// 함수선언
function doSth() {
  console.log("함수선언하고 호출하자!");
}

// 함수 호출
doSth();

// 2. 계산을 하고 리턴하는 함수

// function add(a: number, b: number) {
//   const sum = a + b;
// }
function add(a, b) {
  const sum = a + b;
  return sum; // 값을 전달하기 위해 필수적
}

const result = add(1, 3); // 담아서 출력해야 한다..

console.log(add); // ==> add의 함수가 출력됨
console.log(result);

// console.log로 값을 확인하면서 배우자!

//
// 함수를 인자로 전달
function doSthing(add) {
  console.log(add);
}
// 인자로 add라는 함수 자체를 전달. 25번 라인과 같은 출력
// 함수를 전달할 땐 이렇게 전달.
doSthing(add);

// 함수를 바로 출력해버리면 doSthing이 호출되기 전에
// add함수가 호출되면서 sum이 return되기 때문에 NaN뜸
doSthing(add()); // ;()안에 값이 정의돼있지 않기 때문에 NaN
doSthing(add(1, 2)); // 호출한 뒤에 값이 전달되는 것이기 때문에 함수를 전달하는 게 아님.

//**함수를 인자로 전달할 땐 *//
// 함수의 이름만 이용해야함
console.clear();

function doSthin(add) {
  console.log(add); //함수 출력
  const result = add(2, 3);
  console.log(result); //결과값
}
doSthin(add);

// 선언과 호출의 차이점 이해하기....

console.clear();
const addFun = add;
console.log(addFun); // 함수자체 가르킴. .. 함수 자체 출력
addFun(1, 5);

// 함수 호출할 땐 ()를 꼭 쓰자.
// 인자값도 정확하게 넣자.

console.clear();

// primitive type : 가리키느 값이 작아서 그대로 들어오지만
//                  :복사시 값 자체가 복사됨
// object : 가르키는 값이 많음... 그래서 주소값으로 들어옴
//              : 주소값이 복사됨

// obj -> reference (가르키고 있는 주소)
// age, name -> object (실제 값)
let obj = {
  age: 4,
  name: "kimi",
};
// 변수선언으로 공간할당 시작.

console.log(obj.name);

let obj2 = obj;
obj2.name = "miki";
console.log(obj2.name);
console.log("----------------");
obj.name = "loko";
console.log(obj.name);
console.log(obj2.name);
// obj주소값에 이름을 변경하니까 두개 다 적용됨

// const / let
const object = {
  name: "lolo",
  age: 1,
};

// object자체는 변경이 불가능 (const기 때문에)
// object = {
//   name: "ll",
//   age: 11,
// };

object.name = "jame";
//레퍼런스가 가리키는것의 값을 변경은 가능.
// 상수변수자체는 변경이 불가함.
console.log(object.name); //jame

console.clear();

// 이거 무슨 말인지 모르겠다..
// 스택오버플로 보면 bad style이라는데..
let ob = {
  name: "kam",
};

ob && console.log(ob.name);

let x = 0,
  y = 5;
y && console.log("x is now 5");
console.log(x, y);

// class callback
console.clear();
class Counter {
  // 생성이 되면 0부터 시작된다. (0으로 초기)
  constructor(runFiveTimes) {
    // 매번 라인 by line으로 적어 호출할 수 없르니
    // contructor에서 콜백함수로 받아옴
    //
    this.counter = 0;
    this.callback = runFiveTimes; // 할당
    // 함수의 인자로 받아온 애들을 기억해야 하기 때문에
  }

  // 클래스에서 함수를 작성할 때는 function을 적을 필요가 없다.
  //   increase(msg) {
  //     this.counter++;
  //     console.log(this.counter);
  //     if (this.counter % 5 === 0) {
  //       //   console.log("5의배수");
  //       msg(this.counter); // msg는 그냥 임의의 함수이름. 함수를 호출할거다.
  //       //   정확한 카운터 숫자를 알고싶다면 카운터를 인자로 전달해주면 됨.
  //     }
  //   }
  // }

  // constructor 인자 전달 시
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      //   if (this.callback) {
      //     // callback이 있다면 ; callback이 True면
      //     this.callback(this.counter);
      //   }
      this.callback && this.callback(this.counter);
    }
  }
}

// const coolCounter = new Counter();
// coolCounter.increase(); //1
// coolCounter.increase(); //2

//5의 배수일때마다

// for (let i = 0; i < 10; i++) {
//   coolCounter.increase();
// }

// let i = 0;
// while (i < 10) {
//   coolCounter.increase();
//   i++;
// }

// 매번 똑같은 멘트를 전달하지 않을 때 콜백함수를 전달한다.

function print(num) {
  console.log(`5times ${num}`);
}
// num이라는 임의의 이름으로 this.counter이 전달됨

function alertNum(num) {
  //function이름을 alert로 쓰니까 callstack size exceeded
  alert(`number ${num}`);
}

// coolCounter.increase(print);
// coolCounter.increase(print);
// coolCounter.increase(print);
// coolCounter.increase(print);

// coolCounter.increase(alert); // 진짜 숫자만 alert해줌..
// coolCounter.increase(alertNum);

// for (let i = 0; i < 20; i++) {
//   coolCounter.increase(print);
// }

// 이해한 바..
// increase에서 msg라는 인자로 어떤타입인지 모를 것을 받을 것임.
// 카운터는 계속 증가하고 콘솔로그가 찍힘
// but, 5의 배수일때 인자로 받은 걸 출력할것임.
// msg를 함수형태로 정의했기 떄문에 함수형때로 정의한 것을 인자로 넣을것,
// 그리고 들어간 인자의 function을 실행할 거임

// 이렇게 인자를 넣어 원하는 콜백함수 전달해줌
// const coolCounter = new Counter(print);
const coolCounter = new Counter();
for (let i = 0; i < 20; i++) {
  coolCounter.increase();
}

// 각 기능에 맞게 클래스를 나눠 만들 수 있다.
const printCounter = new Counter(print);
const alertCounter = new Counter(alertNum);
