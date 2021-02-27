## written by : Jinsu Kim
## created : 2021.02.26
## updated : 2021.02.26
## content : setTimeout과 setInterval을 이용한 호출 스케줄링

<hr>

## 👉 스케쥴링(scheduling)

### 함수를 당장 실행하지 않고 정확히 몇 초의 딜레이 후에 실행하기 싶을 때 사용한다


## 👉 setTimeout

### 일정 시간이 지난 후에 함수를 실행하는 방법

## 👉 setInterval

### 일정시간 간격을 두고 함수를 실행하는 방법

<hr>

## 🤖 문법

## 1 setTimeout

```js
let timerID = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

👉 `func | code`
  - 실행하고자 하는 코드(함수 또는 문자열 but 보통 이자리에 함수가 들어간다)

👉 `delay`
  - 실행 전 대기 시간으로 단위는 밀리초(1000밀리초 = 1초)
  - 기본값은 0이다

👉 `arg1, arg2 ...`
  - 함수에 전달할 인수들로 IE9 이하에서 지원안한다.💥💥💥


```js
  function sayHi() {
    console.log("Hello Jinsu");
  }

  setTimeout(sayHi, 2000);
```

💥💥 함수를 실행하지 말자!

setTimeout 함수를 넘길 때 ()을 뒤에 붙이는 실수를 많이한다.

예를 들어 sayHi()를 인수로 전달하면 함수 실행 결과가 전달되어 버린다.

but sayHi()에는 반환문이 없기 때문에 호출 결과는 undefined가 된다.

따라서 원하는 대로 코드가 동작하지 않는다.

## 2. clearTimeout으로 스케줄링 취소하기

```js
let timerId = setTimeout(...);
clearTimeout(timerId);
```

위의 코드와 같이 스케줄링을 취소하고 싶을 때는 `clearTimeout`을 사용하자


## 3. setInterval

기본 문법(setTimeout과 동일하다)
```js
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```

### 🎯 setTimeout은 함수를 한번만 실행하지만 setInterval은 함수를 주기적으로 실행한다!
(함수 호출을 중단하려면 clearInterval(timerId)를 사용하면 된다)

예제 코드
```js
let timerId = setInterval(() => console.log('째깍'), 2000);
setTimeout(() => { clearInterval(timerId); console.log('정지'); }, 5000);
```

## 4. 중첩 setTimeout

무언가를 일정 간격을 두고 실행하는 방법에는 2가지가 있다.

1. setInerval 사용
2. 중첩 setTimeout을 이용하는 방법

중첩 setTimeout을 이용하는 것은 setInterval을 사용하는 것보다 유연하다.

👀👀 왜?? : 호출 결과에 따라 다음 호출을 원하는 방식으로 조정해 스케줄링 가능하다

CPU 소모가 많은 작업을 주기적으로 실행하는 경우에도 setTimeout을 재귀 실행하는 방법이 유용하다. => 작업에 걸리는 시간에 따라 다음 작업을 유동적으로 계획 가능하기 때문

중첩 setTimeout에 대한 추가적인 내용은 아래의 사이트에서 참고
> https://ko.javascript.info/settimeout-setinterval

스케줄링 메소드를 사용할 때는 명시한 지연 간격이 보장되지 않을 수 있다는 점 유의하기

아래와 같은 상황은 브라우저 내 타이머가 느려지면 지연간격 보장 X

1. CPU가 과부하 상태인 경우
2. 브라우저 탭이 백그라운드 모드인 경우
3. 노트북이 배터리에 의존해서 구동중인 경우
