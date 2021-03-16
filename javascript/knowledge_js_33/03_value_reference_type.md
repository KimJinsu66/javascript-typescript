### 📅 created : 2021.02.28
### 📅 updated : 2021.02.28
### 📝 content : 값 타입(Value Type) 과 참조 타입(Reference Type)

## 📝 값 타입(Value Type)

### 📋 값 타입이란?

2장에서 설명한 원시 타입 설명을 참조하세요

값 타입에는 Boolean, null, undefineded, number, string, symbol이 있다.
이 Value Type에는 값을 표현하는 리터럴(Literal) 형식이 존재한다.

### 📋 리터럴 이란?

✏️ Literal이란 데이터 그 자체를 의미한다.

```js
let numberLet = 3;
let jinsuString = "Jinsu";
let booleanLet = true;
```
위 코드에서 리터럴은 `3, Jinsu, true` 이다.


참조 사이트 1에서 값 타입을 정리하신 분이 좋은 예시를 들어주셔서 참조하였다.

```js
var lunch = 'pizza'
var dinner = lunch

console.log(lunch)  // 'pizza'
console.log(dinner) // 'pizza'
```
lunch 변수에는 pizza라는 문자 리터럴을 갖고 있다.
dinner에도 pizza라는 문자 리터럴을 갖고 있다.

dinner과 pizza에서 메모리 할당 스냅샷을 찍어 확인해 보면 아래와 같은 결과가 나온다고 한다.

`dinner :: "pizza" @103243` ❕❗@103243은 다를 수 도 있음!

`lunch  :: "pizza" @103243`

lunch변수와 dinner 변수는 같은 문자열 데이터 메모리를 갖고 있다.

여기서 lunch를 수정한다면??

```js
lunch = 'chicken'
```

다시 메모리를 확인해 보자

`dinner :: "pizza" @103243`

`lunch :: 'chicken' @113673`

- lunch의 값을 chicken으로 변경했음에도 불구하고 dinner의 값은 변하지 않았다.
- lunch와 dinner 두 변수 모두 다른 메모리 주소를 가리키고 있다.

### ✏️ 값 타입은 메모리를 참조해 저장하는 것이 아니라 값을 그대로 저장한다!

---

## 📝 참조 타입(Reference Type)이란 ?

### 📋 참조 타입(Reference Type)은 값 타입이 아닌 모든 데이터 타입을 말한다

- object
- array
- function
- class

✏️ `{}`(객체 리터럴)이나 `[]`(배열 리터럴)을 사용하거나 `new`함수를 사용할 수 있다.

### 📋 참조 타입의 저장 방식

```js
let user = {
  name: 'Jinsu',
  age: 27,
  job: 'Developer',
}

let newUser = user;

console.log(user);
console.log(newUser);
```

크롬의 개발자 도구의 메모리 영역을 확인
- `user :: Object @176907`
- `newUser :: Object @176907`

user, newUser의 메모리 주소가 `@176907`로 같은 것을 확인 할 수 있다.

여기서 user.job의 값을 아래와 같이 바꿔보자.
```js
user.job = "Back-End Developer"

console.log(user);
console.log(newUser);
```
user.job을 바꾸고 다시 메모리 영역을 확인해본다
- `user :: Object @196281`
- `newUser :: Object @196281`

어라 ? user의 job을 바꿨을 뿐인데 value type과 다르게 newUser 메모리 주소도 바뀌었다.

 여기서 알 수 있듯 참조타입에서 **중요한 점**은

✏️ 참조 타입에서 값이 변경되면 동일한 메모리 주소를 가지고 있는 모든 변수의 값이 변경된다는 점이다. 

---

📰 참조

1. https://alstn2468.github.io/Javascript2020-05-08-ValueTypeReferenceType/
2. https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
