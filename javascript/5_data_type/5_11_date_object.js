/*
  written by : Jinsu Kim
  created : 2021.02.24
  updated : 2021.02.24
  information : Date 객체와 날짜(Date Object and Date)
*/

let now = new Date();
console.log(now);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Jan02_1970 = new Date( 24 * 3600 * 1000 );
console.log(Jan02_1970);

// datestring
let date = new Date("2020-01-01");
console.log(date);

let Jan01_2011 = new Date(2011, 0, 1, 0, 0, 0, 0);
console.log(Jan01_2011);

console.log( date.getFullYear() );
console.log( date.getMonth() );
console.log( date.getDate() );
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
console.log( date.getHours() );
console.log( date.getDay() );
console.log( date.getTime() );

// Date 객체에는 자동고침(autocorrection)이 있어 범위를 벗어나면 자동으로 고쳐준다

let incorrectDate = new Date(2013, 0, 32);
console.log(incorrectDate);

// 벤처마크(기능의 속도 측정)
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

// Subtract : 54ms, GetTime: 11ms => 형 변환이 없어서 엔진 최적화에 드는 자원이 줄어드므로 getTime()을 이용한 방법이 훨씬 빠르다.
console.log( 'diffSubtract를 십만번 호출하는데 걸린 시간: ' + bench(diffSubtract) + 'ms' );
console.log( 'diffGetTime을 십만번 호출하는데 걸린 시간: ' + bench(diffGetTime) + 'ms' );
