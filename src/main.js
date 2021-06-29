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

// main
// 아이템들를 동적으로 받아서 프로미스가 리턴
// -> 프로미스가 성공
// -> dis, setE 함수 호출
loadItems()
  .then((items) => {
    // console.log(items);
    // 아이템스 배열자체만 출력됨

    displayItems(items); //아이템디스플레이
    // setEventListeners(items); //필터링
  })
  .catch(console.log);
