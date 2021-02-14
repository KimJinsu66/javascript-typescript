let value = true;
console.log(typeof value);

// string 형 변환
value = String(value);
console.log(typeof value);

// string을 나누기도 가능
console.log("6" / "2"); // result = 3

// int 형변환
let str = "123";
let num = Number(str);
console.log(typeof num); // number

let age = Number("String");
console.log(age); // NaN, 형변환 실패

// Boolean 형변환

console.log( Boolean(1) );       // true
console.log( Boolean(0) );       // false
console.log( Boolean("hello") ); // 문자열(true)
console.log( Boolean("") );      // 빈 문자열(false);
