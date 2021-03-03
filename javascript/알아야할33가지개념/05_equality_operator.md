### 📅 created : 2021.02.28
### 📅 updated : 2021.02.28
### 📝 content : == vs === vs typeof(동등 연산자)

---

## 📝 == 연산자

✏️ == 연산자의 경우 암시적 변환을 한뒤에 검사한다

```js
0 == '' //true
0 == '0' //true
1 == true //true
false == '0' //true
null == undefined //true
false == null //false
false == undefined //false
```

위의 예시에서 볼수 있듯이 `0` 과 `''`는 다르지만 true `1` 과 `true`도 결과값이 다르지만 true를 반환해주는 것을 알 수 있다.

📜 이유 : JS에서는 ''는 int로 변환하면 0을 true의 경우 int형으로 변환하면 1으로 변환해 주기 때문에 이러한 결과가 나온다고 한다.

## 📝 === 연산자

✏️ === 연산자는 암시적 형변환이 일어나지 않고 값의 타입까지 검사한다
타입까지 검사하고 싶은경우 `===`를 사용하도록 하자

```js
0 === '0'           //false
0 === []            //false
'0' === []          //false
0 === ''            //false
0 === '0'           //false
1 === true          //false
false === '0'       //false
null === undefined  //false
false === null      //false
false === undefined //false
```

위에서는 몇개가 true였지만 ===로 바꾼 예제의 경우 모두가 false가 나오는 것을 확인 할 수 있다.

## 📝 typeof

✏️ 피 연산자의 타입을 반환하는 함수 이다.

❗ typeof는 함수가 아니다.

```js
console.log(typeof 'good'); // string
console.log(typeof 333333); // number
```

---

📰 참조

1. https://alstn2468.github.io/Javascript/2020-05-12-==-vs-===vs-typeof/
2. 