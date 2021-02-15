// 화살표 함수 

// 단순형

let sum = (a, b) => a + b;
console.log(sum(3, 5));

// 인수 생략 가능

let double = n => n * 2;
console.log(double(3));

// 본문이 여러줄인 함수
let minus = (a, b) => {
  let c = a - b;
  console.log(c);
}