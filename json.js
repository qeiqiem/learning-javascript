// JSON
// 브라우저 웹 어플리케이션 클라이언트 <-> 서버 (통신 == http)
// 가장 간단한 데이터 포맷
// {key : value}
// 언어들, 언어가 쓰이는 플랫폼에 상관없이 쓰일 수 있음

// ajax
// 동적으로 서버 주고받는 것...

// xml
// 마크업언어. 데이터를 표현하는 방법..
// 서버와 주고 받을 때 xml뿐만 아니라 다양한 타입, json도 활발히 사용됨

// 1. object -> json
// stringify(obj)
// 오버로딩 : 같은 함수 이름, 매개변수는 다름
//          어떤 파라미터, 몇개의 파라미터냐에 따라 각각 다른 방식으로 호출
let json = JSON.stringify(true);
console.log(json);

// 함수는 json에 포함되지 x
// 함수가 object의 데이터가 아니기 때문.
// js에만 있는 symbol같은 특별한 데이터도 포함되지 않음

// 2. json -> object
// parse(json)
