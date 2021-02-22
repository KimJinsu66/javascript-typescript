// Array(配列, 배열) and Method

let fruits = ["apple", "orange", "banana"];

fruits.forEach( function(fruit, index, fruits) {
  console.log(`${fruit}, ${index}, ${fruits}`);
});
/*
결과값 : 
  apple, 0, apple,orange,banana
  orange, 1, apple,orange,banana
  banana, 2, apple,orange,banana
*/

// map method
let fruitsLength = fruits.map(item => item.length);
console.log(fruitsLength); // 결과값 : [ 5, 6, 6 ]

// sort method(문자열로 바껴서 sort하는 것에 주의)
let arr = [ 1, 2, 15 ];
console.log(arr.sort()); // 1, 15, 2
// => 문자열로 바뀐 뒤 정렬 되기 때문에 2보다 15가 먼저 나온다.

// 화살표 함수를 사용하면 더 간결하게 할 수 있다.
arr.sort( (a, b) => a - b );

// split
let names = 'Bilbo, Gandalf, Nazgul';
arr = names.split(', ');
console.log(arr); // [ 'Bilbo', 'Gandalf', 'Nazgul' ]

// join method
let str = arr.join(';');
console.log(str);  // Bilbo;Gandalf;Nazgul

// Array확인하는 방법
console.log(Array.isArray(arr));
console.log(Array.isArray(str));
