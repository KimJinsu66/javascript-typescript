/*
  written by : Jinsu Kim
  created : 2021.02.24
  updated : 2021.02.24
  information : 재귀와 스택(recursion and stack)
*/

// 함수가 자기 자신을 호출할 수도 있다.

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log( pow(2, 3) );

// 재귀를 이용하면 함수 호출의 결과가 명확해질 때 까지 함수 호출을 더 간단한 호출로 계속 줄일 수 있다.
// 재귀를 사용하면, 간결하고 유지보수가 쉬운 코드를 만들 수 있음
function recursion_pow(x, n) {
  if ( n == 1 ) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log( recursion_pow(2, 3) );
