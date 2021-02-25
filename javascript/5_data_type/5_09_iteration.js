/*
  written by : Jinsu Kim
  created : 2021.02.24
  updated : 2021.02.24
  information : Object.keys, values, entries
*/

let user = {
  name: "Jinsu",
  age: 27
};

// "Jinsu", 27이 출력됨
for (let value of Object.values(user)) {
  console.log(value);
}

console.log( Object.keys(user) );

// 객체 변환하기
let prices = {
  banana: 1,
  orange: 2,
  meat:   4,
};

// 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌린다.
let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat);
