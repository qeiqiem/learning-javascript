// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const res = fruits.toString();
  console.log(res);
  console.log(`정답은 ${res}`);
}
// join 으로 묶어서 만들 수도 있다.
// 구분자를 만들어서 스트링으로 만들수있음

// Q2. make an array out of a string
// string -> array
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  console.log(fruits);
  const res = fruits.split(",");
  console.log(res);
  //   2개까지만
  const resNum = fruits.split(",", 2);
  console.log(resNum);
}

// Q3
// reverse : 원래 배열의 순서도 바꿈

// Q4
// splice : 원래 배열도 바뀜 (배열 자체를 수정)
// slice : 잘라서 반환해줌. (배열에서 원하는 부분만 return)

// Q5
