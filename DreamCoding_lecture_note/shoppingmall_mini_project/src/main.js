"use strict";
// json.. js object notation
// object안에는 모든 정보를 담고 있어야 함.
// 그래서 타입~이미지까지 전부 json object에 정의헤서 담는다.

// json파일을 이용해 동적으로 요소를 추가해보자.

// data.json을 읽어와서 로드해줌.
// 동적으로 읽어옴 -> 시간 걸림 -> promise 리턴하도록

// Fetch the items from the JSON file
// => json 파일의 items를 동적으로 받아올 것.
function loadItems() {
  return (
    // 1. fetch로 데이터를 받아오고
    fetch("data/data.json") // 해당 파일의 경로 or url
      // 2. 받아온 데이터가 성공적이면 데이터(response)를 json으로 변환
      //   .then(console.log(response)) // .then(console.log(response)) 하면 not definded at loadItems error
      .then((response) => response.json()) // response의 body를 json으로 변환
      //   .then((json) => console.log(json)) //data.json에 등록했던 items의 16개 배열이 불러와짐
      //   위에는 items와 proto....가 들어있으나 우리가 필요한 건 Only *items

      // 3. json안에 있는 items를 리턴할 것
      .then((json) => json.items)
  ); //item만 받아올것임
}

// items를 받아와서 html요소로 변환 -> 페이지 표기되도록 함
function displayItems(items) {
  const container = document.querySelector(".items"); //정의한 이름
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `
    <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
    `;
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons"); // 컨테이너 자체에 이벤트 리스너 등록 => 이벤트 위임
  // 한곳에서만 핸들링 할 수 있도록 이벤트 위임을 한다.
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// 이벤트를 처리하는 함수는 on~ 형식으로 이름을 짓는다.
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  console.log(event.target.dataset.key);
  console.log(event.target.dataset.value);

  if (key == null || value == null) {
    return;
  }

  // 해당 키,밸류만 보여줄 수 있도록
  // 오브젝트 : 배열처럼 키를 이용해 데이터에 접근 가능!

  // item이라는 oject에 object={key:value} 형태로 있고,
  // 그 key값이 value(dataset.value) 즉, t/skirt/pants 중 하나랑 같다면 필터링해라.
  // array의 filter로 리스팅해주는 것.
  // 버튼의 키, 밸류는 하나의 값을 담고 있고 그걸 아이템[키]랑 매칭하면 해당 항목이 리스팅되게 된다.

  displayItems(items.filter((item) => item[key] === value));
}

// main
// 아이템들를 동적으로 받아서 프로미스가 리턴
// -> 프로미스가 성공
// -> dis, setE 함수 호출
loadItems()
  .then((items) => {
    // console.log(items);
    // 아이템스 배열자체만 출력됨

    displayItems(items); // all 아이템디스플레이
    setEventListeners(items); // onClick 필터링
  })
  .catch(console.log);
