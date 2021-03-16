### 📅 created : 2021.03.05
### 📅 updated : 2021.03.05
### 📝 content : 프로토타팁의 상속과 체인

---

## 📝 프로토 타입의 상속

### 📋 1. call 메소드를 활용 => 함수 호출하기



### 📋 2. Object.create()

✏️ 괄호`()` 안에 들어가는 프로토 타입 객체 및 속성을 가지는 새 객체를만드는 메소드
  - 상위 클래스의 메서드를 그대로 확장한 하위 클래스의 객체를 생성할 때 사용
  - 반드시!! 하위클래스의 프로토 타입의 constructor를 지정해주어야 한다

```js
var a = {a: 1};
var b = Object.create(a);
console.log(b.a); // 1

var c = Object.create(b);
console.log(c.a); // 1
// c ---> b ---> a ---> Object.prototype ---> null
```
### 📋 class 키워드 이용

class에서 `constructor`, `static`, `extends`, `super` keyword를 사용한다.
📜 참고

JS는 모든 것이 동적이고 실행 시 결정되는 자바스크립트의 특징이 어려울 수도 있다.

## 📝 프로토타입 상속의 종류

### 📋 위임형 상속(Delegation inheritance)

- 위임형 상속에서 프로토 타입 객체는 다른 객체의 기반이 된다.
- 위임 프로토 타입을 상속받을 경우 새 객체는 해당 트로토타입에 참조를 갖고 있다
- 메소드를 위임 상속할 경우 모든 객체가 각 메소드에 대해 하나의 코드를 공유하므로 메모리 절약 가능

예시
```js
class Greeter {
  constructor (name) {
    this.name = name || 'John Doe';
  }
  hello () {
    return `Hello, my name is ${ this.name }`;
  }
}

const george = new Greeter('George');
const msg = george.hello();
console.log(msg); // Hello, my name is George
```

단점
- 상태를 저장하는 대 좋은 방법이 아니다.
  - 객체나 배열의 상태를 변경하게 되면 같은 프로토 타입을 공유하는 모든 객체의 상태가 변경됨

### 📋 연결형 상속(Concatenative inheritance)

- 한 객체의 속성을 다른 객체에 모두 복사함으로서 상속을 구현하는 방법
  - JS의 동적 확장성을 이용한 방법
- Object.assign()을 통해 구현하는 것이 보통
- 클로져와 같이 사용한다면 훨씬 효과적인 방법

예제
```js
const proto = {
  hello: function hello() {
    return `Hello, my name is ${ this.name }`;
  }
};

const george = Object.assign({}, proto, {name: 'George'});
const msg = george.hello();
console.log(msg); // Hello, my name is George
```
### 📋

---

📰 참조

- [자바스크립트의 상속과 프로토타입 체인(JavaScript Inheritance and the Prototype Chain)
nayeon·2020년 5월 9일](https://velog.io/@nayeon/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%83%81%EC%86%8D%EA%B3%BC-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EC%B2%B4%EC%9D%B8JavaScript-Inheritance-and-the-Prototype-Chain)

- https://www.nextree.co.kr/p7323/
