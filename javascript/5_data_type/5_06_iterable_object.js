// iterable 객체
/*
  written by : Jinsu Kim
  created : 2021.02.22
  updated : 2021.02.22
*/

// iterable(이터러블) 객체는 배열을 일반화한 객체
// 이터러블 이라는 개념을 사용하면 어떤 객체에든 for..of 반복문 적용가능(배열은 대표적 이터러블)

// example1 Symbol.iterator

let range = {
  from: 1,
  to:   5
};

// string은 대표적인 이터러블이다.
for (let char of "test") {
  console.log( char );
}
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
// 이터레이터를 명시적으로 호출

let str = "Hello";
let iterator = str[Symbol.iterator]();

while (true) {
  let result =iterator.next();
  if (result.done) break;
  
  console.log(result.value); // 글자가 하나씩 출력된다
}

/*
  iterator을 사용하는 경우는 많이 없지만
  사용한다면 for..of보다 반복과정을  더 잘 통제할 수 있다는 장점이 있다.
  반복을 시작했다가 잠시 멈추고 다른 작업을 하다가 다시 반복을 시작하는 것같이 
  반복과정을 여러개로 쪼갤 수 있다.
*/

// 이터러블 vs 유사배열
/*
  이터러블은 메서드 Symbol.iterator가 구현된 객체
  이터러블의 대표적 예는 !문자열! 이다
  인덱스와 length 프로퍼티가 있는 객체는 유사배열이라고 부른다.
*/

// Array.from을 사용하면 이터러블이나 유사 배열인 obj를 진짜 Array로 만들 수 있다.

Array.from(obj[, mapFn, thisArg]);

