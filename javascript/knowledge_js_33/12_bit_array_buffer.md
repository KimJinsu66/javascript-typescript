### 📅 created : 2021.03.02
### 📅 updated : 2021.03.02
### 📝 content : 비트 연산자, 형식화 배열, 버퍼(배열)

---

## 📝 비트 연산자

JS는 7가지의 비트 연산자를 제공한다

연산자 | 이름 | 설명 |
|-----|------|------|
&     | AND  | 양쪽의 비트가 모두 1인 비트만 1로 설정
|     | OR   | 양쪽 비트 중 하나가 1이면 비트를 1로 설정
^     | XOR  | 양쪽 비트 중 하나만 1일 경우 비트를 1로 설정
~     | NOT  | 모든 비트를 반전시킨다
<<    | Zero fill left shift|	오른쪽에 0을 넣어 왼쪽으로 이동하고 가장 왼쪽 비트를 버린다
\>\>    | Signed right shift | 가장 왼쪽 비트를 왼쪽에 넣고 가장 오른쪽 비트를 버립니다.
\>>>   | Zero fill right shift | 왼쪽에 0을 넣어 오른쪽으로 이동하고 가장 오른쪽 비트를 버립니다.

일딴 이런 비트 연산자가 있다는 것만 알아두고 넘어가자(향후 공부 예정)

## 📝 형식화 배열(Typed Array)

- 형식화 배열의 원소는 모두 숫자
- 형식화 배열은 크기가 고정된다
- 생성자에 숫자의 타입과 크기를 사용해 형식화 배열을 생성
- 배열이 생성된 시점에 형식화 배열의 원소들은 항상 0으로 초기화

✏️ 장점 : 실행시간과 메모리 사용 측면에서 효율적일 수 있다.

## 📝 버퍼(배열)

✏️ 버퍼는 길이가 정해져 있는 이진 데이터를 저장하며 데이터 부분을 나타낸다.

버퍼를 생성하는 방법
```js
var buffer = new ArrayBuffer(8)
```

뷰는 `DataView` 생성자를 이용해 생성하며 버퍼를 매개변수로 받는다
```js
var view = new DataView(buffer)
```

set 과 get 메소드가 있다.(필요할 때 사이트에서 참고하기)
- [DataView의 데이터를 설정하는 `set` 메소드](https://alstn2468.github.io/Javascript/2020-10-10-Bitwise_TypedArray_ArrayBuffer/#dataview%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EC%84%A4%EC%A0%95%ED%95%98%EB%8A%94-set-%EB%A9%94%EC%86%8C%EB%93%9C)
- [DataView의 데이터를 읽는 `get` 메소드](https://alstn2468.github.io/Javascript/2020-10-10-Bitwise_TypedArray_ArrayBuffer/#dataview%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EC%9D%BD%EB%8A%94-get-%EB%A9%94%EC%86%8C%EB%93%9C)

✏️ ArrayBuffer을 이용하면 JS에서도 메모리를 수동적으로 관리할 수 있게된다.
- 상황에 맞게 메모리를 수동관리하게 되면 성능 향상에도 도움이 된다.
- 수동관리를 해도 성능이 나빠질 수 있기 때문에 상황에 맞게 사용하자

---

📰 참조

1. https://alstn2468.github.io/Javascript/2020-10-10-Bitwise_TypedArray_ArrayBuffer/
