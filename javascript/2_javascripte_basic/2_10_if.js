// if문

// 한줄 if문 가능
let year = 2015;
if (year == 2015) console.log("正解！");

// 여러 줄 if 문
if (year == 2015) {
  console.log("正解!");
  console.log("정답이에요!");
}

// 1은 true, 0은 false
if (1) {
  console.log("true");
}

if (0) {
  console.log("false");
}

// if else + else if
if (year == 2015) {
  console.log("정답!");
} else if (year > 2015) {
  console.log("else if 연습");
} else {
  console.log("땡!");
}

// 3항 연산자(ruby의 3항이랑 같다!)
let result = year == 2015 ? "good" : "bad";
console.log(result);
