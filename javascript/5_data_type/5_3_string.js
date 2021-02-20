let str = "Hello Jinsu Kim";

// index.Of는 0을 반환하지만 if문에서 0은 false이다.
if (str.indexOf("Jinsu") != -1) {
  console.log("find it!");
}

// 비트 NOT 연산자를 사용하는 기법

console.log( ~2 ); // -3, -(2 + 1)과 같다
console.log( ~1 ); // -2, -(1 + 1)과 같다
console.log( ~0 ); // -1, -(0 + 1)과 같다
console.log( ~str.indexOf("Jinsu") );

// 부분 문자열인지 아닌지 확인하는 방법
if (~str.indexOf("Jinsu")) {
  console.log("find it!(bit)");
}

// includes function return true or false
if (str.includes("Kim")) {
  console.log("includes Kim");
}

console.log( "Jinsu".startsWith("Jin") ); // true
console.log( "Jinsu".startsWith("in") );  // false

console.log( "Jinsu".endsWith("su") );    // true
console.log( "Jinsu".endsWith("s") );     // false

console.log ( "JinsuKim".slice(0,5) );     // Jinsu
console.log ( "JinsuKim".substring(0,5) ); // Jinsu
console.log ( "JinsuKim".substr(0,5)) ;    // Jinsu

// slice는 음수 가능 음수인 경우 문자열 끝에서부터 카운팅 한다
// substring는 음수를 0으로 취급한다.
// substr은 0(start) 부터 5(length) 개의 글자를 출력한다.
