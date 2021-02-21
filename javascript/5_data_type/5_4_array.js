// Array(配列, 배열)

// 선언 방법에는 2가지가 있다.
let arr  = new Array();
let arr2 = [];

let fruits = ["apple", "orange", "banana"];

console.log(fruits[0]); // apple

// 배열 요소에는 제약이 없다

let user1 = [
  "apple", 
  { name: "Jinsu"},
  true,
  function() { console.log("Hello"); }
];

console.log(user1[1].name); // Jinsu
user1[3]();

// pop : 배열 끝 요소 제거(제거한 요소 반환)
fruits.pop();
console.log( fruits ); // [ 'apple', 'orange' ]

// push : 배열 끝에 요소 추가
fruits.push("kiwi");
console.log( fruits ); // [ 'apple', 'orange', 'kiwi' ]

// shift : 배열 앞 요소를 제거
fruits.shift();
console.log( fruits ); // [ 'orange', 'kiwi' ]

// unshift : 배열 앞에 요소를 추가하낟
fruits.unshift('apple');
console.log( fruits ); // [ 'apply', 'orange', 'kiwi' ]

// 아래와 같이 여러개도 가능
fruits.push("오렌지", "배");
fruits.unshift("파인애플", "레몬");

// 성능을 따지면 push와 pop은 빠르지만 shift와 unshift는 느리다
// 이유 : shift, unshift의 경우 요소를 제거 후 index를 바꿔줘야하기 때문

// for..of는 index는 없을 수 없고 값만 얻는다.
for ( let fruit of fruits) {
  console.log(fruit);
}

// for in은 배열이 아니라 객체와 함께 사용할 때 최적화 되어있다.
// なるべく 배열에는 for..in을 쓰지 않도록 한다.
