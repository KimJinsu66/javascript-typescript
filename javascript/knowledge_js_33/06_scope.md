### 📅 created : 2021.03.01
### 📅 updated : 2021.03.01
### 📝 content : 함수 범위, 블록 범위, 렉시컬(lexical 범위)

---

## 📝 범위란?

✏️ 프로그램에서 범위(Scope)는 변수의 접근 기능과 생존기간을 의미한다.

### 📋 전역 범위(Global Scope)

✏️ 코드 전체에서 참조 가능

### 📋 지역 범위(Local Scope)

✏️ 정해진 코드 부분에서만 참조 가능

### 📋 범위의 특징

- 변수의 범위는 **함수 단위** 이다.
- 스크립트 실행 시 함수 범위의 변수 선언은 `호이스팅`이 이루어진다
- 스크립트 실행 시 변수 관리는 `렉시컬 영역` 기준으로 한다
- 스크립트 실행시 변수 검색은 `스코프 체인`을 이용한다

#### 📜 호이스팅이란?

✏️ 함수 안에 있는 선언들을 모두 끌어 올려서 해당 함수 유효 범위의 최상단에 선언하는 것

- var 변수 선언과, 함수 선언문에서만 호이스팅이 일어남(let, const는 일어나지 않음)

```js
// 실제 코드
function sumNumber(b) {
    
    console.log(result); // undefined

    let result = 1;
    console.log(result); // 1
    return result
}

// 자바스크립트 내 호이스팅으로 동작 할 때
function sumNumber(b) {
    let result
    console.log(result); // undefined

    result = 1;
    console.log(result); // 1
    
    return result
}
```


## 📝 함수 범위 (Function Scope)

간단한 예시를 살펴보자

```js
let a = 0;

function sumNumber(b) {
    let result = 0;
    let c = 0;
    
    // Error
    result = a + b;
    
    // No Error
    result = b + c;

    return result
}
```

위의 예시는 설명을 위한 간단한 function은 만들어 보았다.

a는 function 바깥쪽에 선언 되어 있기 때문에 function scope에 속하지 않는다.
함수 범위에서 가장 중요한 것은 `함수 내부에서 선언된 변수는 함수 내부에서만 접근이 가능하다는 것이다.`

#### 📜 var 키워드 없이 선언 가능한 변수

변수를 선언 할 때 var이나 let 같은 키워드 없이 변수 선언이 가능하다
=> 키워드가 없이 선언된 변수는 window객체의 변수로 전역 변수 사용이 가능하다.

## 📝 랙시컬 범위

✏️ 함수의 실행 시 범위를 함수 정의 단계의 범위로 참조하는 특성
- 렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정된다

> [간단한 렉시컬 정리(클로저)](https://github.com/KimJinsu66/javascript-typescript/blob/main/javascript/6_function_advance/6_03_closert.md)

## 📝 스코프 체인(Scope Chain)

✏️ JS 엔진은 식별자를 찾을 때 일단 자신이 속한 scope에서 찾고 => scope에 식별자가 없으면 상위 scope에서 다시 찾는다. 이 현상을 스코프 체인이라고 한다

- 스코프가 중첩되어 있는 모든 상황에서 발생한다.

#### 📜 실행 컨텍스트
ECMAScript 스펙에 따르면 실행 컨텍스트를 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이라고 정의한다. 

좀 더 쉬운말로 설명하면 `실행 컨텍스트는 실행 가능한 코드가 실행되기 위해 필요한 환경`이라고 할 수 있다.

---

📰 참조

1. https://ko.javascript.info/closure
2. https://alstn2468.github.io/Javascript/2020-05-13-FunctionScope_BlockScope_and_LexicalScope/
3. https://poiemaweb.com/js-scope
4. [스코프 체인 관련 자료](https://leehwarang.github.io/2019/10/07/scope.html)
5. [실행컨텍스트와 자바스크립트의 동작원리가 잘 정리 되어있다.](https://poiemaweb.com/js-execution-context)\
6. [호이스팅이란?](https://velog.io/@devsof/%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85Hoisting%EC%9D%B4%EB%9E%80)
