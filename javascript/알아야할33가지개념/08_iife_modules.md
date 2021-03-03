### 📅 created : 2021.03.01
### 📅 updated : 2021.03.01
### 📝 content : IIFE, Modules, Namespaces

---

## 📝 IIFE

✏️ Immediately Invoked Founction Expression으로 즉시 호출 함수 표현식이다.
- 함수 선언과 동시에 함수 호출이 되는 익명 함수 이다.

기본형
```js
(function() {
    // add someting code...
})();
```

- ( function() {} ) : `()`로 감싸주어 함수 선언문을 함수 표현식으로 바꾼다.
- `()`으로 감싸줌으로써 함수를 반환하는 함수가 되었다.

### 📜 IIFE를 쓰는 이유?

- 전역 범위에서 변수가 선언되는 것을 방지
- IIFE내부에 선언된 변수에 접근하지 못하도록 할 수 있다.

두개의 메소드의 차이점을 확인해 보자

```js
const number = 1;

function printNumber() {
    console.log(number);
}

printNumber() // 1
```

```js
(function() {
    const number = 1;
})();
console.log(number); // Error
```

두개의 코드를 비교해 보면 알 수 있듯 IIFE내부에서 선언된 변수는 IIFE에서만 사용가능하다.

IIFE를 사용하면서 변수를 privates하게 관리할 수 있게되며 `캡슐화` 되었다.


## 📝 Modules

✏️ Module은 프로그램의 일부분으로 프로그램은 하나 이상의 modul의 조합으로 구성됨
- 구현을 캡슐화 하고 재이용률이 높아진다.(쉽게 불러어고 사용 가능)
- `expoer`와 `import`를 적용하면 다른 모듈을 불러와 불러운 모듈에 있는 함수를 호출하는 것과 같은 기능공유가 가능하다


✏️ export and import

- export : 지시자를 변수나 함수 앞에 붙이면 외부 모듈에서 해당 변수나 함수에 접근할 수 있다.(모듈 내보내기)
- import 지사자를 사용하면 외부 모듈의 기능을 가져올 수 있다(모듈 가저오기)

```js
// 📂 sayHi.js
export function sayHi(user) {
    console.log(`Hello ${user}!`);
}
```

```js
// 📂 main.js
import {sayHi} from './sayHi.js';

console.log(sayHi); // 함수
sayHi('John');      // Hello, John!
```

```js
<script type="module">
  import {sayHi} from './say.js';
</script>
```

#### 📜 참고
- 모듈은 변수를 공유하지 않는다.
- 브라우저 환경에서도 <script type="module">을 사용해 모듈을 만들면 독립적인 스코프가 만들어진다.

### 📋 Module Pattern

- Module Pattern은 `private, public` 메소드 모두 포함 가능
- 단일 객체 내의 변수도 포함 가능

#### 📜 근데 왜 Module이야?

- 특정 부분을 전역 범위로 부터 보호
- 동일 페이지 내부에서 함수 이름이나 변수 이름이 충돌하는 것 예방

### 📋 대표적인 Module Pattern

- UMD(Universal Module Definition)
- CommonJS
- AMD(Asynchronous Module Definition)
- ES6 Module
- System.register

## 📝 NameSpaces

✏️ NameSpace는 구분이 가능하도록 정해놓은 범위나 영역을 의미한다.
- 현재 JS는 아직 Namespacing을 지원하지 않아 다음 특성을 이용한다
  - JS의 모든 객체는 속성을 갖는다
  - 객체에 담긴 속성은 다른 객체를 담을 수 있다


전역객체 하나를 만들고 모든 기능을 전역 객체에 추가하는 패턴
- 현재는 Module을 사용하는 것이 더 직관적이고 간편해 많이 사용되지 않는다고 한다

```js
var globalObject = {}

globalObject.sayHello = function() {
  console.log('Hello!');
}
globalObject.sayBye = function() {
  console.log('Bye!');
}

globalObject.sayHello();
globalObject.sayBye();
```




📜 참고


---

📰 참조

1.