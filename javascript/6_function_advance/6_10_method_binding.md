### 🙋‍♂️ written by : Jinsu Kim
### 📅 created : 2021.02.27
### 📅 updated : 2021.02.27
### 📝 content : Method 바인딩

---

# 📚 함수 바인딩

> setTimeout에 메소드를 전달 할 때 또는 객체 메소드를 콜백으로 전달할 때 this 정보가 사라지는 문제가 발생한다

## 📝 사라진 'this'

```js
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
```

Hello John이 출력되어야 하는대 Hello undefined가 출력된다.

브러우저 환경에서 setTimeout은 메소드는 특별한 방식으로 동작한다. 인수로 전달 받은 함수를 호출 할 때
this에 window를 할당한다. 따라서 위의 예시에서는
this.firstName은 window.firstName이 되기 때문에 Window 객체에는 firstName이 없다. => 그래서 undefined가 출력

## 📝 해결책 1 : 래퍼

```js
// let user은 동일 생략
setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);
```

이 코드가 동작하는 이유는 외부 렉시컬 환경에서 user를 받아서 보통 때 처럼 호출 했기 때문이다.

와래와 같이도 수정 가능

```js
setTimeout(() => user.sayHi(), 1000); // Hello, John!
```
이 코드의 경우 간결해 진다는 장점이 있지만 약간의 취약성이 발생한다.

setTimeout이 트리거 되기전에(1초가 되기전에) user가 변경되면 변경된 객체의 메소드를 호출하게 된다.

## 📝 해결책2 : bind

모든 함수는 `this`를 수정하게 해주는 내장 메소드 bind를 제공

```js
let boundFunc = func.bind(context);
```

예제

```js
let user = {
  firstName: "Kim"
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John
```
func.bind(user)는 func의 this를 user로 바인딩한 변형이라고 생각하면 된다.

say에 바인딩 하는 것도 가능하다
```js
let say = user.say.bind(user);
```

📜 bindAll로 메소드 전체 바인딩 하기

객체의 복수의 메소드가 있는 경우, 메소드 전체를 전달하려 할 때에는 반복문을 사용하여 바인딩이 가능하다

```js
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}
```
자바스크립트 라이브러리를 사용해도 대규모 바인딩이 가능하다
- lodash 라이브러리의 _.bindAll(object, methodNames)가 그 예이다. 

## 📝 부분 적용

❗ this 뿐만 아니라 인수에도 바인딩이 가능하다!

```js
let bound = func.bind(context, [arg1], [arg2], ...);
```

```js
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

console.log( double(3) ); // = mul(2, 3) = 6
console.log( double(4) ); // = mul(2, 4) = 8
console.log( double(5) ); // = mul(2, 5) = 10
```

mul.bind(null, 2)를 호출 했을 때 double에 컨택스테가 null, 첫번째 인수는 2인 mul이 호출 된다.

### 📜 이 null은 왜 주는 거지?

bind에는 컨텍스트를 항상 넘겨줘야 함으로 null을 사용하였다
context가 있는 경우 context를 넘겨주면 된다.


이런 방식을 전문 용어로 `부분 적용(partial application)` 이라고 한다.

### 📜 왜 부분함수를 만들까?

- 가독성이 좋은 이름(double, triple)을 가진 독립 함수를 만들 수 있다는 이점이 있다.
- bind를 사용해 첫 번째 인수를 고정할 수 있기 때문에 매번 인수를 전달 할 필요가 사라진다.
- 매우 포괄적인 함수를 기반으로 덜 포괄적인 변형 함수를 만들 수 있다는 점에서 유용

## 📝 컨텍스트 없는 부분 적용

인수는 고정하고 컨텍스트 this는 고정하고 싶지 않은 경우도 있을 것이다!

네이티브 bind만으로는 컨텍스트를 생략하고 인수로 바로 뛰는 것은 못한다 ㅠㅠ
but 다행히도 인수만 바인딩 해주는 헬퍼함수 partial을 구현하는 건 쉽다!!

아래의 예를 참고하자
```js
function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

// 사용법:
let user = {
  firstName: "Kim",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// 시간을 고정한 부분 메서드를 추가함
user.sayNow = partial(user.say, 
  new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// 출력값 예시:
// [10:00] Kim: Hello!
```
partial(func[, arg1, arg2...])을 호출하면 래퍼((*))가 반환됩니다. 

래퍼를 호출하면 func이 다음과 같은 방식으로 동작합니다.


1. 동일한 this를 받습니다(user.sayNow는 user를 대상으로 호출됩니다).
2. partial을 호출할 때 받은 인수("10:00")는 ...argsBound에 전달됩니다.
3. 래퍼에 전달된 인수("Hello")는 ...args가 됩니다.

lodash 라이브러리의 _.partial을 사용하면 컨텍스트 없는 부분 적용을 직접 구현하지 않아도 된다는 점을 알아두자!

### 📜 래퍼 객체란?
래퍼 객체란 이름처럼 원시 타입의 값을 감싸는 형태의 객체이다. 

`number, string, boolean, symbol 데이터 타입`에 각각 대응하는 

`Number, String, Boolean, Symbol`이 제공된다.

자바스크립트의 문자열은 원시 타입으로 존재한다. 우리가 문자열의 프로퍼티에 접근하려고 할 때(위의 str.length 예제처럼) 자바스크립트는 new String을 호출한 것처럼 문자열 값을 객체로 변환한다.

이 객체를 `래퍼 객체`라고 한다. 래퍼 객체는 프로퍼티를 참조할 때 생성되며 프로퍼티 참조가 끝나면 사라진다.

