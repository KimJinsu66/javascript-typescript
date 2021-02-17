// 옵셔널 체이닝 '?.'

let user = { };

console.log(user.address.street); // result is error

// ?.가 추가되기 전에는 &&연산자를 사용했다.
console.log(user && user.address && user.address.street); // result is error

// ?.은 ?.앞의 평가 대상이 undefined or null인 경우 평가를 멈추고 undefined를 반환한다.

console.log( user?.address?.street); // undefined, 에러 발생 X

/* 주의 할점
  ?.은 존재하지 않아도 괜찮은 대상에만 사용해야 한다.
*/

delete user?.name; // user가 존재하면 user.name을 삭제한다.
