/*
  🙋‍♂️ written by : Jinsu Kim
  📝 content : 오래된 var
  📅 created : 2021.02.25
  📅 updated : 2021.02.25
*/

if (true) {
  var test = "접근 가능한가?";
}

console.log(test);

if (true) {
  let letTest = "접근 가능한가?";
}

console.log(letTest); // Error

// 함수안에 있다면 var는 함수 레벨 변수가 된다.
function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  alert(phrase); // 제대로 출력됩니다.
}

sayHi();
alert(phrase); // Error: phrase is not defined

// var과 같은 전역변수는 되도록 사용하지 않는 것이 좋다
