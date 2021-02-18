// symbol(심볼)

/*
  symbol은 유일한 식별자(unique identifier)을 만들고 싶을 때 사용

*/

let id_exe = Symbol();

// symbol을 만들 때 심볼 이름이라 불리는 설명을 붙일 수 있다(디버깅 시 유용)
let id = Symbol("id");

// ruby의 symbol과 다르다.(혼동하지 말자)

// 문자열과 symble을 근본이 다르다. => 우연히라도 서로의 타입으로 변환돼서는 안된다.

console.log(id.toString());  // string으로 변환해서 출력
console.log(id.description); // 프로퍼티를 이용하면 실명만 보여주는 것도 가능


// 심볼은 for.. in 에서 배제 된다.
let user = {
  name: "Kim",
  age: 27,
  [id]: 001
};

for (let key in user) console.log(key); // name과 age만 출력되고, 심볼은 출력되지 않습니다.

// 심볼로 직접 접근하면 잘 작동합니다.
console.log( "직접 접근한 값: " + user[id] );


// 전역 심볼 레지스트리(ruby의 symbol 개념과 같다.)
// 레지스트리 안에 있는 심볼을 읽거나, 새로운 심볼을 생성하려면 아래와 같이 작성
// Symbol.for(key);

let original_id = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만듬
let id_again   = Symbol.for("id"); // 동일한 이름으로 심볼을 읽는다.

console.log( "두 심볼의 결과값은" + (original_id === id_again))
