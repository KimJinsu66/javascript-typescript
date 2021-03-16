### 📅 created : 2021.03.01
### 📅 updated : 2021.03.01
### 📝 content : 식(expression) vs 문(statement)

---

## 📝 JS의 expression and statement

- Expression은 Statement처럼 동작 할 수 **있다.**
- Statement는 Expression처럼 동작 할 수 **없다.**

### 📋 식 : Expression

✏️ Expression은 하나의 값을 만들어 낸다.

식에는 4가지가 존재한다

- 값

```js
10
3.14
'Hello Jinsu'
undefined
```

- 연산식

```js
1 + 1
30 * 5 
5 < 3
```

- 리터럴

```js
{} // 객체 리터럴
[] // 배열 리터럴
```

- 함수호출
```js
user.sayHi();
```

### 📋 문 : Statement

✏️ Statement은 기본적으로 무언가 수행해야한다.

문에는 9가지가 있다.

- if
- if-else
- while
- do-while
- for
- switch
- for-in
- debugger
- variable declaration

간단한 예시

```js
if(true) { 10 + 10 }
```

#### 📜 식과 문의 미세한 차이

```js
2 + 2  => Expression
2 + 2; => Expression Statements
```

`;` 이 추가되었기 때문에 표현식 문장이 되었다. 이 차이점에 유의하자

---

📰 참조

1. https://alstn2468.github.io/Javascript/2020-05-14-Expression_vs_Statement/
