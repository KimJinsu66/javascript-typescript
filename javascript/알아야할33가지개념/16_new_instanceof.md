### 📅 created : 2021.03.04
### 📅 updated : 2021.03.04
### 📝 content : 16. new, 생성자, instanceof, 인스턴스

---

## 📝 New 연산자

### 📋 동작원리

1. 새로운 빈 객체 생성
2. this를 새로 만들어진 객체에 바인딩한다
3. 새로 만들어진 객체에 __proto__(`참고로 _이게 x2 이다`)라 불리는 property를 더한다
4. 생성된 오브젝트가 함수로부터 반환될 수 있도록 함수의 마지막에 return this를 추가
   - 생성된 객체가 반환된다
## 📝 생성자(Constructor)

✏️ 객체를 만드는 역할을 하는 함수

- `.prototype` 속성을 갖고있다.
  - `prototype`은 다시 constructor을 가리키는 .constructor라는 오브젝트를 갖고있다.
- 모든 오브젝트가 사용해야할(필요한) 함수와 속성을 prototype에 추가 할 수 있다(상속의 개념을 갖고 있기 때문에)

- 일반적으로 생성자에는 return 문이 없다.
- 규칙
  - 생성자 함수의 첫 문자는 대문자로 생성
  - 생성자 함수는 오직 `new`로만 호출

```js
function Student(name, age) {
    this.name = name;
    this.age = age;
}

var std1 = new Student('John', 26); // instance
console.log(std1.name);
```

DRY한 JS객체 작성 방법

1. function으로 오브젝트 생성
2. JS의 prototypal nature을 활용

![constructor_instance](C:\Users\jinsu\OneDrive\사진\js\constructor_instance.png)

### 📜 Prototype?

- JS의 모든 객체들은 prototype을 갖고 있다.
- 자신이 다른 객체의 원형이 되는 객체를 말한다

  prototype과 proto의 차이
- 프로토타입(Prototype)은 생성된 개체에서 proto 속성이 되는 것을 결정하는 생성자 기능의 속성이다.
- __proto__는 생성된 참조이며, 이 참조는 프로토타입 체인 결합이라고 알려져 있습니다.

## 📝 인스턴스

✏️ 인스턴스란?
- 생성자 함수를 사용하기 위한 수단이다
- 생성자 함수의 구조로 컴퓨터 메모리에 실제로 저장되는 실체이다
- new 키워드로 생성한 객체를 인스턴스라고 부른다.

```js
let obj1 = new Student("Jinsu");
```

### 📜 instanceof

✏️ 값이 클래스 또는 생성자 함수의 인스턴스 인지 확인한다.

1. 인스턴스가 가지고 있는 _protp_ 정보를 가지고 온다.
2. 객체가 가진 _proto_와 함수의 prototype을 비교한다
3. 동일한 값을 찾기 위해 체인 영역의 전체를 2번 과정으로 반복

```js
console.log(instaceOfObj instanceof CustomFn);
```
---

📰 참조

- https://corock.tistory.com/474
- https://oizys18.github.io/2020-06-23/16_new-Constructor-instanceof-instance
- [[JS-STUDY] 자바스크립트 개발자라면 알아야 할 33가지 개념 #16. new, Constructor, instanceof and Instances -by 무럭무럭 자라나라 혜인님](https://hi-haein.tistory.com/entry/JS-STUDY-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-16-new-Constructor-instanceof-and-Instances)