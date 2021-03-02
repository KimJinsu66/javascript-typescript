### 📅 created : 2021.02.28
### 📅 updated : 2021.02.28
### 📝 content : 명시적, 암시적 변환, Nominal, 구조화 덕 타이핑

---

## 📝 명시적 변환(Explict Conversion) and 암시적 변환

### 📋 형 변환(Type Conversion)

✏️ 문자를 숫자로, 숫자를 문자로 변환하는 등에 대한 작업

JS에서는 `parseInt` 또는 `toString` 같은 함수가 존재한다.


### 📋 명시적 변환(Explict Conversion)

✏️ 명시적 변환은 개발자가 의도적으로 형변환을 하는 것을 말한다.

기본적인 형변환은 `Object(), Number(), String(), Boolean()`과 같은 함수를 이용한다.

```js
let variable = 228;

console.log(variable, typeof variable);
// 결과 : 228 number

variable = String(variable);
console.log(variable, typeof variable);
// 결과 : 228 string

variable = Object(variable);
console.log(variable, typeof variable);
// 결과 : [String: '228'] object

variable = Boolean(variable);
console.log(variable, typeof variable);
// 결과 : true boolean
```

- 숫자형으로 변경할 때 쓰는 함수 : `Number(varliable)`, `parseInt(variable)`, parseFloat(variable)
  - Boolean 데이터인 true false는 `true는 1`로 `false는 0`으로 반환된다
  - parseInt의 경우 정수형의 숫자로 반환된다.
  - parseFloat의 경우 실수형의 숫자로 반환된다.

- 문자형으로 변경할 때 쓰는 함수 : `String()`, `toString()`, `toFixed()`
  - toString의 경우는 number데이터를 변환할 대 진수 지정가능
  - toFixed()는 number 데이터만 사용가능(인자의 값만큼 소수점 자리수를 표현)

- Boolean 타입으로 변경할 때 쓰는 함수 : Boolean()
  - 0, Nan, null, undefined가 아닌 값들은 모두 true로 변환된다.

### 📋 암시적 변환

✏️ 암시적 변환은 자바스크립트 엔진이 자동으로 데이터 타입을 변환시키는 것

예시로는 

```js
let number = 1
let str = '1'

console.log(number + str); // 결과 : 11(type: string)
```
이 처럼 따로 지정하지는 않았지만 number을 숫자로 하는 것이 아닌 문자열로 변환하여 자동으로 출력해주는 것을 암시적 변환이라고 한다.

📜 더하기 연산자를 제외한 연산자에서는 숫자의 우선순위가 문자보다 높다
```
➕의 경우 : `문자 > 숫자`
그 외     : `숫자 > 문자`
```
더 자세하게 공부 하고 싶은 경우(참조 사이트1에서 공부하자!)
---

## 📝 타입 검사 방법(Nominal, Structural, Duck 타이핑)

### 📋 Nominal Typing(명칭적 타이핑)

✏️ 특정 키워드를 통하여 타입을 지정해 사용하는 방식(C++, JAVA에서 타입검사가 이루어짐)

아래의 예시처럼 지정한다
```js
int number = 50;
char str = 'a';
```
➕ 클래스의 경우 extends와 같은 키워드를 이용해서 서로 호환 가능함을 명시한다.

### 📋 Structural(구조적 타이핑)

✏️ 멤버에 따라 타입을 검사하는 방법(주로 TypeScript 또는 Go에서 사용)

- 두 데이터의 타입 구조를 비교하여 호환되는 타입인지 검사
- 한 타입이 다른 타입이 갖는 멤버를 모두 가지고 있을 경우 두 타입은 호환되는 타입

```js
interface People {
  name: string
}

let people: People
let p = { name: 'Min Su', location: 'Pangyo' }
people = p
```

여기서 p는 people의 name 속성을 갖고 있기 때문에 문제없이 people에 대입할 수 있다.

### 📋 Duck 타이핑

✏️ 덕 타이핑이란 변수 및 메소드 집합이 객체의 타입을 결정하는 것이다.(Python, Ruby 등에서 사용)

아래에 말에서 유래됬다고 한다
> 어떤 새가 오리처럼 걷고, 헤엄치고, 소리를 낸다면 그 새를 오리라고 부를 것이다.

- 장점
  - 타입을 설정하면서 생기는 제약을 줄일 수 있다
  - 코드를 유연하게 작성할 수 있다

- 단점
  - 타입 검사를 하지 않기 때문에 오류가 발생하기 쉽다
  - 테스트 코드를 작성 하는 것이좋다(? 단점이자 장점)

---

📰 참조

1. https://alstn2468.github.io/Javascript/2020-05-11-Implicit_Explict_Nominal_Structuring_DuckTyping/
2. https://medium.com/@seungha_kim_IT/structural-subtyping-346af4dffe77